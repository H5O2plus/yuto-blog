import posts from '../../posts.json';

/*
Gets an array of all tags (and occurance counts) by default.
Can query a specific tag to get an array of posts under the tag.
*/
export default (req, res) => {
    const { tag } = req.query;

    let ret_arr;

    if (tag) {
        let matches = [];

        posts.forEach(cur => {
            if (cur.tags.includes(tag) && !cur.draft && !cur.hidden) {
                matches.push(cur);
            }
        })

        matches.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })

        ret_arr = matches;
    }
    else {
        let tagsArr = [];

        posts.forEach(cur => {
            if (!cur.draft && !cur.hidden) {
                cur.tags.forEach(curTag => {
                    tagsArr.push(curTag);
                })
            }
        })

        tagsArr = [...tagsArr.reduce((m, v) => m.set(v, (m.get(v) || 0) + 1), new Map())];

        tagsArr.sort();

        ret_arr = tagsArr;
    }

    res.status(200).json(ret_arr);
};
