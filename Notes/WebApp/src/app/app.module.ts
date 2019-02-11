import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Root Application Components
import { SessionService } from './services/session.service';
import { AppComponent } from './components/_app/app.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { LoaderComponent } from './components/_shared/loader/loader.component';

// Index Route Components
import { IndexService } from './components/index/index.service';
import { IndexRouteComponent } from './components/index/index-route/index-route.component';

// Notes Route Components
import { NotesRouteComponent } from './components/notes/notes-route/notes-route.component';
import { NotesSearchComponent } from './components/notes/notes-search/notes-search.component';
import { NotesContentComponent } from './components/notes/notes-content/notes-content.component';
import { NotesAuthorComponent } from './components/notes/notes-author/notes-author.component';
import { NotesTagsComponent } from './components/notes/notes-tags/notes-tags.component';

// Note Route Components
import { NotesService } from './components/notes/notes.service';
import { NoteRouteComponent } from './components/note/note-route/note-route.component';

// Profile Route Components
import { ProfileService } from './components/profile/profile.service';
import { ProfileRouteComponent } from './components/profile/profile-route/profile-route.component';

// Tags Route Components
import { TagsService } from './components/tags/tags.service';
import { TagsRouteComponent } from './components/tags/tags-route/tags-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    IndexRouteComponent,
    NotesRouteComponent,
    NotesSearchComponent,
    NotesContentComponent,
    NotesAuthorComponent,
    NotesTagsComponent,
    NoteRouteComponent,
    ProfileRouteComponent,
    TagsRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexRouteComponent },
      { path: 'profile', component: ProfileRouteComponent },
      { path: 'tags', component: TagsRouteComponent },
      { path: 'notes', component: NotesRouteComponent },
      { path: 'note', component: NoteRouteComponent },
    ])
  ],
  providers: [
    IndexService,
    SessionService,
    NotesService,
    ProfileService,
    TagsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
