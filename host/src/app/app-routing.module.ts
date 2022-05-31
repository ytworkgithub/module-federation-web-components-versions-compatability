import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'federated-web-app-component',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      remoteName: 'remote',
      exposedModule: './web-components',
      elementName: 'app-component',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
