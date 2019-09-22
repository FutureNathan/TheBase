import { TagsInterface, Tags } from '../Database';
import { Response, Code, ResponseTemplate } from '../service/Response.service';

export async function CreateTag(req, res) {
    let routeResponse: Response = ResponseTemplate();
    try {
        const TagsObject: TagsInterface = {
            user: req.session.user._id,
            name: req.body.name,
            color: req.body.color,
            dateCreated: Number(new Date()),
            dateUpdated: Number(new Date()),
        };

        const NewTag = new Tags(TagsObject);
        routeResponse.response = await NewTag.save();
    } catch (error) {
        console.log(error);
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }
    return res.status(routeResponse.code).send(routeResponse);
}

export async function GetTags(req, res) {
    let routeResponse: Response = ResponseTemplate();
    try {
        routeResponse.response = await Tags
            .find({ user: req.session.user._id })
            .sort({ dateCreated: -1 });
    } catch (error) {
        console.log(error);
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }
    return res.status(routeResponse.code).send(routeResponse);
}

export async function DeleteTag(req, res) {
    let routeResponse: Response = ResponseTemplate();
    try {
        routeResponse.response = await Tags
            .deleteOne({ _id: req.params._id, user: req.session.user._id })
            .sort({ dateCreated: -1 });
    } catch (error) {
        console.log(error);
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }
    return res.status(routeResponse.code).send(routeResponse);
}
