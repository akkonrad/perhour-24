import {Rule} from '@angular-devkit/schematics';
import {absoluteFrom} from "@angular/compiler-cli";

export function ngAdd(options: any): Rule {
  return (tree, context) => {
    const path = absoluteFrom('src/app/app.component.ts');
    const content = tree.read(path);
}
