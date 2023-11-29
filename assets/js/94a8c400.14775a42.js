"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[2961],{951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var l=t(5893),a=t(1151);const o={title:"Fullnode yaml example",id:"fullnode-yaml"},i="NOTE:",s={id:"validators/yaml-templates/fullnode-yaml",title:"Fullnode yaml example",description:"You no longer have to modify a fullnode.yaml by hand, as there is now a tool to initialize fullnode configuration.",source:"@site/docs/validators/yaml-templates/fullnode-yaml.md",sourceDirName:"validators/yaml-templates",slug:"/validators/yaml-templates/fullnode-yaml",permalink:"/validators/yaml-templates/fullnode-yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/fullnode-yaml.md",tags:[],version:"current",frontMatter:{title:"Fullnode yaml example",id:"fullnode-yaml"},sidebar:"tutorialSidebar",previous:{title:"YAML Templates",permalink:"/category/yaml-templates"},next:{title:"Validator yaml example",permalink:"/validators/yaml-templates/validator-yaml"}},r={},d=[{value:"~/.libra/fullnode.yaml",id:"librafullnodeyaml",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"note",children:"NOTE:"}),"\n",(0,l.jsx)(n.p,{children:"You no longer have to modify a fullnode.yaml by hand, as there is now a tool to initialize fullnode configuration."}),"\n",(0,l.jsxs)(n.p,{children:["That is:\n",(0,l.jsx)(n.code,{children:"libra config fullnode-init"})]}),"\n",(0,l.jsx)(n.p,{children:"The following files should be maintained with the correct seed peers relative to the chain they serve:"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"mainnet"}),":\n",(0,l.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/seed-peers/blob/main/seed_peers.yaml",children:"https://github.com/0LNetworkCommunity/seed-peers/blob/main/seed_peers.yaml"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"testnet"})," is TBD."]}),"\n",(0,l.jsx)(n.h3,{id:"librafullnodeyaml",children:"~/.libra/fullnode.yaml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"base:\n  role: 'full_node'\n  data_dir: '/home/vnuser/.libra/data'\n  waypoint:\n    from_file: '/home/vnuser/.libra/genesis/waypoint.txt'\n\nstate_sync:\n     state_sync_driver:\n        # do a fast sync with DownloadLatestStates\n        # bootstrapping_mode: ExecuteOrApplyFromGenesis\n        bootstrapping_mode: DownloadLatestStates\n        continuous_syncing_mode: ExecuteTransactionsOrApplyOutputs\n\nexecution:\n  genesis_file_location: '/home/vnuser/.libra/genesis/genesis.blob'\n\nfull_node_networks:\n- network_id: 'public'\n  listen_address: '/ip4/0.0.0.0/tcp/6182'\n  seed_addrs:\n    1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f:\n    - \"/ip4/70.15.242.6/tcp/6182/noise-ik/0x1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f/handshake/0\"\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var l=t(7294);const a={},o=l.createContext(a);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);