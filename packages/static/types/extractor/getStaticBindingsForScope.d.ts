import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
export declare function getStaticBindingsForScope(scope: NodePath<t.JSXElement>['scope'], whitelist: string[] | undefined, sourcePath: string, bindingCache: Record<string, string | null>, shouldPrintDebug: boolean | 'verbose'): Promise<Record<string, any>>;
//# sourceMappingURL=getStaticBindingsForScope.d.ts.map