const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postContent = document.getElementById("post-list");



function addLikeEventListeners() { //not my code; written by AI
    const likeButtons = document.getElementsByClassName("like")
    for (let i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener("click", function () {
            posts[i].likes += 1
            render()
        });
    }
}



function render() {
    account = ""
    for (i = 0; i < posts.length; i++)
    account += `
        <section class="post">
            <div class="account">
               <img class="avatar-img" src="${posts[i].avatar}" alt="" />
               <div class="account-name">
                   <h1>${posts[i].name}</h1>
                   <h2>${posts[i].location}</h2>
               </div>
           </div>
           <img class="post-img" src="${posts[i].post}" alt="">
           <div class="post-body">
               <div class="post-icons">
                   <img class="like" src="./images/icon-heart.png" alt="">
                   <img src="./images/icon-comment.png" alt="">
                   <img src="./images/icon-dm.png" alt="">
               </div>
               <p class="bold-text">${posts[i].likes} likes</p>
               <p><span class="bold-text" id="username">${posts[i].name}</span> ${posts[i].comment}</p>
           </div>
        </section>`

    postContent.innerHTML = account
    addLikeEventListeners();
};

render()

