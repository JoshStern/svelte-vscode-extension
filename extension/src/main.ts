import vscode from 'vscode';
import { CustomEditorProvider } from './CustomEditorProvider';

export function activate(ctx: vscode.ExtensionContext) {
	ctx.subscriptions.push(CustomEditorProvider.register(ctx));
}
