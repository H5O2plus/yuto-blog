import posts from '../../posts.json';

/*
Gets an array of all posts by default, sorted by date.
Can query a filename to get other data about a post.
*/
export default (req, res) => {
    const { idname, drafts, hidden } = req.query;

    let ret;

    if (idname) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].filename === idname) {
                ret = posts[i];
                break;
            }
        }
    }
    else {
        posts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
        
        let filter_cb;

        if (drafts && hidden) filter_cb = (cur) => {
            return cur.draft || cur.hidden;
        }
        else if (drafts) filter_cb = (cur) => {
            return cur.draft;
        }
        else if (hidden) filter_cb = (cur) => {
            return cur.hidden;
        }
        else filter_cb = (cur) => {
            return !cur.draft && !cur.hidden;
        }

        ret = posts.filter(filter_cb)
    }

    res.status(200).json(ret);
};
