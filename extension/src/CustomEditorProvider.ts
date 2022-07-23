import vscode from 'vscode';

function getTemplate(ctx: vscode.ExtensionContext, webview: vscode.Webview) {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				http-equiv="Content-Security-Policy"
				content="default-src 'none'; img-src ${webview.cspSource} https:; script-src ${webview.cspSource}; style-src ${webview.cspSource};"
			/>
			<script type="module" crossorigin src="${webview.asWebviewUri(vscode.Uri.joinPath(ctx.extensionUri, 'dist', 'webview', 'my-extension.umd.js'))}"></script>
			<link rel="stylesheet" href="${webview.asWebviewUri(vscode.Uri.joinPath(ctx.extensionUri, 'dist', 'webview', 'style.css'))}">
			<title>Edit Document</title>
		</head>
		<body>
			<div id="app">
			</div>
		</body>
	</html>
	`;
}

export class CustomEditorProvider implements vscode.CustomTextEditorProvider {
	public static register(ctx: vscode.ExtensionContext) : vscode.Disposable {
		const provider = new CustomEditorProvider(ctx);
		const providerRegistration = vscode.window.registerCustomEditorProvider(CustomEditorProvider.viewType, provider);
		return providerRegistration;
	}

	public static readonly viewType = 'myExtension.customEdit';
	constructor(private readonly ctx: vscode.ExtensionContext) {}

	public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		webviewPanel: vscode.WebviewPanel,
		/* token: vscode.CancellationToken, */
	): Promise<void> {
		webviewPanel.webview.options = {
			enableScripts: true,
		};
		webviewPanel.webview.html = getTemplate(this.ctx, webviewPanel.webview);
	}
}