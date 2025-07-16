const vscode = require("vscode");

function activate(context) {
  console.log("✅ HTML Tag Mapper aktif (multi-tag)!");

  let activeEditor = vscode.window.activeTextEditor;

  const decorationType = vscode.window.createTextEditorDecorationType({
    after: {
      color: "gray",
      margin: "0 0 0 1rem",
      fontWeight: "bold",
    },
  });

  const supportedTags = ["div", "section", "article", "span", "header", "footer", "nav", "main"];
  const tagPattern = supportedTags.join("|");
  const regex = new RegExp(`<(/?)(${tagPattern})(\\s[^>]*?)?>`, "g");

  function updateDecorations() {
    if (!activeEditor) return;

    const text = activeEditor.document.getText();
    const decorations = [];

    const stack = [];
    const tagPairs = [];
    const unmatchedClosings = [];
    let tagId = 1;

    let match;
    while ((match = regex.exec(text))) {
      const isClosing = match[1] === "/";
      const tagName = match[2];
      const attrText = match[3] || "";
      const offset = match.index;
      const pos = activeEditor.document.positionAt(offset);

      const tagMatch = attrText.match(/data-tag\s*=\s*"(\d+)"/);
      const manualId = tagMatch ? parseInt(tagMatch[1]) : null;

      if (!isClosing) {
        const id = manualId || tagId++;
        stack.push({ offset, pos, tagId: id, tagName, paired: false });
      } else {
        const id = manualId;
        let found = null;

        if (id !== null) {
          found = stack.find((item) => item.tagId === id && item.tagName === tagName && !item.paired);
          if (found) found.paired = true;
        } else {
          for (let i = stack.length - 1; i >= 0; i--) {
            const candidate = stack[i];
            if (!candidate.paired && candidate.tagName === tagName) {
              candidate.paired = true;
              found = candidate;
              break;
            }
          }
        }

        if (found) {
          tagPairs.push({ open: found, close: { pos, tagId: found.tagId } });
        } else {
          unmatchedClosings.push(pos);
        }
      }
    }

    for (const entry of stack) {
      if (!entry.paired) {
        decorations.push({
          range: new vscode.Range(entry.pos, entry.pos),
          renderOptions: {
            after: { contentText: ` ↑✘`, color: "red" },
          },
        });
      }
    }

    for (const pos of unmatchedClosings) {
      decorations.push({
        range: new vscode.Range(pos, pos),
        renderOptions: {
          after: { contentText: ` ↓✘`, color: "red" },
        },
      });
    }

    for (const { open, close } of tagPairs) {
      decorations.push({
        range: new vscode.Range(open.pos, open.pos),
        renderOptions: {
          after: { contentText: ` ↑${open.tagId}` },
        },
      });
      decorations.push({
        range: new vscode.Range(close.pos, close.pos),
        renderOptions: {
          after: { contentText: ` ↓${close.tagId}` },
        },
      });
    }

    activeEditor.setDecorations(decorationType, decorations);
  }

  vscode.workspace.onDidChangeTextDocument(
    (event) => {
      if (activeEditor && event.document === activeEditor.document) {
        updateDecorations();
      }
    },
    null,
    context.subscriptions
  );

  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      activeEditor = editor;
      if (editor) updateDecorations();
    },
    null,
    context.subscriptions
  );

  if (activeEditor) updateDecorations();
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
