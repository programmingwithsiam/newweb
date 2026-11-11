import{e as S,u as w,j as s,b as A,r as i,g as l,o as I,L,h as p,q as T,i as d,k as z,l as R}from"./index-Cphsf56u.js";import{C as U}from"./CreatePost-Minimal.js";import{P as _}from"./PostCard-C1Iab-G1.js";import"./FacebookEmbed-qyC8Ro5C.js";import"./image-CEgNQhhW.js";import"./lock-keyhole-27tHbIS2.js";/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};v.node;const D=S(v);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 0 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};C.node;const F=S(C);function V() {
  const { profile } = w();
  const avatar = profile?.photoURL || "";
  const [stories, setStories] = i.useState([]);
  const [loaded, setLoaded] = i.useState(false);
  const [loadError, setLoadError] = i.useState(false);
  const [attempt, setAttempt] = i.useState(0);

  i.useEffect(() => {
    let active = true;
    import("/assets/js/story-manager.js?v=20261108-community-stories")
      .then(module => module.getActiveStories())
      .then(items => {
        if (active) {
          setStories(items);
          setLoaded(true);
        }
      })
      .catch(error => {
        console.error("[Community] Stories could not be loaded:", error);
        if (active) {
          setLoadError(true);
          setLoaded(true);
        }
      });
    return () => { active = false; };
  }, [attempt]);

  const openStory = id => window.location.assign("/stories.html?id=" + encodeURIComponent(id));
  const createStory = () => window.location.assign("/stories.html?mode=create");
  const createCard = s.jsxs("button", {
    className: "story-create-card",
    type: "button",
    onClick: createStory,
    "aria-label": "Create a story",
    children: [
      s.jsx("span", {
        className: "story-create-media" + (avatar ? " has-avatar" : ""),
        style: avatar ? { backgroundImage: "url(" + avatar + ")" } : undefined
      }),
      s.jsxs("span", {
        className: "story-create-footer",
        children: [
          s.jsx("span", { className: "story-create-plus", children: s.jsx(D, { size: 21 }) }),
          s.jsx("strong", { children: "Create Story" })
        ]
      })
    ]
  });
  const storyCards = stories.length
    ? stories.map(story => {
        const media = story.mediaUrl || story.imageData;
        return s.jsxs("button", {
          className: "story-card",
          type: "button",
          onClick: () => openStory(story.id),
          "aria-label": "View story from " + (story.authorName || "Member"),
          children: [
            s.jsx("span", {
              className: "story-card-image",
              style: media ? { backgroundImage: "url(" + media + ")" } : undefined
            }),
            story.type !== "image" && s.jsx("span", {
              className: "story-card-text-preview",
              children: story.content || "Shared a story"
            }),
            s.jsx("span", {
              className: "story-card-ring",
              "aria-hidden": "true",
              children: s.jsx("span", {
                className: "story-card-avatar",
                style: story.avatarUrl ? { backgroundImage: "url(" + story.avatarUrl + ")" } : undefined
              })
            }),
            s.jsx("span", { className: "story-card-name", children: story.authorName || "Member" })
          ]
        }, story.id);
      })
    : s.jsx("div", {
        className: "story-empty-card",
        role: "status",
        children: !loaded
          ? "Loading stories..."
          : loadError
            ? s.jsx("button", {
                className: "story-retry-button",
                type: "button",
                onClick: () => { setLoaded(false); setLoadError(false); setAttempt(value => value + 1); },
                children: "Couldn’t load stories. Retry"
              })
            : "No active stories yet"
      });

  return s.jsxs("section", {
    className: "stories-strip",
    "aria-label": "Stories",
    children: [
      s.jsxs("div", {
        className: "stories-heading",
        children: [
          s.jsxs("div", {
            children: [
              s.jsxs("span", { className: "stories-kicker", children: [s.jsx(F, { size: 13 }), " COMMUNITY MOMENTS"] }),
              s.jsx("h2", { children: "Stories" })
            ]
          }),
          s.jsx("a", { href: "/stories.html", className: "stories-see-all", children: "View all" })
        ]
      }),
      s.jsxs("div", { className: "stories-scroller", children: [createCard, storyCards] })
    ]
  });
}function W(){const{user:t}=w();A();const[n,r]=i.useState(new Set),[P,h]=i.useState({}),[f,y]=i.useState(!0),[x,g]=i.useState(""),[E,$]=i.useState(0),M=i.useCallback(e=>{const o=l(d,`posts/${e}`);return I(o,m=>{m.exists()?h(a=>({...a,[e]:m.val()})):h(a=>{const c={...a};return delete c[e],c})})},[]);i.useEffect(()=>{let e=[];r(new Set),h({}),y(!0),g("");const o=setTimeout(()=>y(!1),900);async function m(){try{const a=new Set,c=await p(T(l(d,"publicPostsIndex"),z("createdAt"),R(40)));if(c.exists()&&Object.keys(c.val()).forEach(u=>a.add(u)),t){const u=await p(l(d,`userPosts/${t.uid}`));u.exists()&&Object.keys(u.val()).forEach(j=>a.add(j));const k=await p(l(d,`friends/${t.uid}`));if(k.exists()){const j=Object.keys(k.val());for(const q of j){const N=await p(l(d,`userPosts/${q}`));N.exists()&&Object.keys(N.val()).forEach(O=>a.add(O))}}}r(a),e=Array.from(a).map(M)}catch(a){console.warn("Community feed unavailable:",a),g("Feed could not load. Check your connection and try again.")}finally{y(!1)}}return m(),()=>{clearTimeout(o),e.forEach(a=>a&&a())}},[t,E]);const b=Object.entries(P).filter(([e])=>n.has(e)).sort((e,o)=>(o[1].createdAt||0)-(e[1].createdAt||0));return s.jsxs("div",{className:"feed",children:[s.jsx(U,{}),s.jsx(V,{}),f&&s.jsx(L,{label:"Loading your feed..."}),!f&&x&&s.jsxs("div",{className:"empty-state feed-error",children:[s.jsx("p",{children:x}),s.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>$(e=>e+1),children:"Retry"})]}),!f&&!x&&b.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx("p",{children:"No public posts yet."}),t&&s.jsx("p",{className:"muted",children:"Add friends or write your first post to get started."})]}),b.map(([e,o])=>s.jsx(_,{postId:e,post:o},e))]})}export{W as default};
