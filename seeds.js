const faker = require ('faker')
const Post = require ('./models/post')

async function seedPosts(){
    await Post.remove({});
    for (const i of new Array(40)){
        const post = {
            title : faker.lorem.word(),
            description : faker.lorem.text(),
            author:{
                "_id" : "609537eb8ddeaaa801d6e362",
	            "username" : "camilo",
            }
        }
        await Post.create(post)
    }
    console.log('40 new posts created')
}

module.exports = seedPosts;