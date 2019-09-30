import { NotesInterface, Notes } from '../Database';
import { Response, Code, ResponseTemplate } from '../service/Response.service';

export async function CreateNote(req, res) {
    let routeResponse: Response = ResponseTemplate();
    try {
        const NotesObject: NotesInterface = {
            user: req.session.user._id,
            tag: req.body.tag._id,
            text: req.body.text,
            dateCreated: Number(new Date()),
            dateUpdated: Number(new Date()),
        };

        const NewNote = new Notes(NotesObject);
        routeResponse.response = await NewNote.save();
    } catch (error) {
        console.log(error);
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }
    return res.status(routeResponse.code).send(routeResponse);
}

export async function GetNotes(req, res) {
    let routeResponse: Response = ResponseTemplate();
    try {
        routeResponse.response = await Notes
        .find(req.query.tag ? { user: req.session.user._id, tag: req.query.tag } : { user: req.session.user._id })
        .sort({ dateCreated: -1 })
        .populate({ path: 'tag', model: 'Tags' });
    } catch (error) {
        console.log(error);
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }
    return res.status(routeResponse.code).send(routeResponse);
}
