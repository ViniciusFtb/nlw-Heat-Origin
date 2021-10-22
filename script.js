const socialMedia = {
    github: 'ViniciusFtb',
    youtube: 'channel/UCO_9sFcyxONeFnWe2Bzprvw',
    instagram: 'vinicius_fontebasso',
    twitter: 'viniciusFtbass',
    facebook: 'profile.php?id=100017659009407'
}
const links = document.querySelectorAll('a');
links.forEach(link => {    
    for (let i in socialMedia){
        if(link.href.includes(i)){
            link.href = `https://${i}.com/${socialMedia[i]}`
        }
    }
});


let userAvatar = document.getElementById('personal');
let userName = document.getElementById('userName');
let userLink = document.getElementById('github_link');
let userLogin = document.getElementById('github_login');
let userBio = document.getElementById('github_bio');
function getGithubInfos(){
    const url = 'https://api.github.com/users/ViniciusFtb';
    
    fetch(url)
        .then(response => response.json())
            .then(data => {
                userAvatar.src = data.avatar_url;
                userName.textContent = data.name;
                userLink.href = data.html_url;
                userLogin.textContent = data.login;
                userBio.textContent = data.bio;
            })
}
getGithubInfos();

