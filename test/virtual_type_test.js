const assert = require('assert');
const User = require('../src/user');

describe('Virtual Types', () => {
    it('postCount returns number of posts', (done) => {
        const joe = User({
        name: 'Joe',
        posts: [{ title: 'PostTitle' }]
    });

    joe.save()
        .then(() => User.findOne({ name: 'Joe' }))
        .then(() => {
            assert(joe.postCount === 1);
            done();
        });
    });
});