require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const githubdata = {
    "login": "suraj-aithal",
    "id": 115139298,
    "node_id": "U_kgDOBtzi4g",
    "avatar_url": "https://avatars.githubusercontent.com/u/115139298?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/suraj-aithal",
    "html_url": "https://github.com/suraj-aithal",
    "followers_url": "https://api.github.com/users/suraj-aithal/followers",
    "following_url": "https://api.github.com/users/suraj-aithal/following{/other_user}",
    "gists_url": "https://api.github.com/users/suraj-aithal/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/suraj-aithal/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/suraj-aithal/subscriptions",
    "organizations_url": "https://api.github.com/users/suraj-aithal/orgs",
    "repos_url": "https://api.github.com/users/suraj-aithal/repos",
    "events_url": "https://api.github.com/users/suraj-aithal/events{/privacy}",
    "received_events_url": "https://api.github.com/users/suraj-aithal/received_events",
    "type": "User",
    "site_admin": false,
    "name": "suraj aithal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2022-10-06T06:59:56Z",
    "updated_at": "2024-06-14T12:30:34Z"
  }

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/twitter',(req,res)=>{
    res.send('suraj-aithal')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>code aur chai</h1>')
})
app.get('/git',(req,res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT,()=>{
    console.log(`example app running on ${port}`)
})