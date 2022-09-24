import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.workspace.onDidChangeTextDocument(
	  (event) => {
		const editor = vscode.window.visibleTextEditors.find(
		  (e) => e.document === event.document
		);
		if (editor !== undefined) {
		  updateDecorations(editor);
		}
	  },
	  null,
	  context.subscriptions
	);
  }
   
  function updateDecorations(editor: vscode.TextEditor) {
	const language = editor.document.languageId;
	if (language !== "typescript" && language !== "typescriptreact") {
		return;
	};
   
	const code = editor.document.getText();
   
	// codeから関数呼び出しを見つけてデコレーションを表示する
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
 export function deactivate() {}
