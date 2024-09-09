"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[1002],{1502:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=r(5893),o=r(1151);const t={},s="Libra Move Dev Quick Start",d={id:"core-devs/dev-quick-start",title:"Libra Move Dev Quick Start",description:"TL;DR",source:"@site/docs/core-devs/dev-quick-start.md",sourceDirName:"core-devs",slug:"/core-devs/dev-quick-start",permalink:"/core-devs/dev-quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/core-devs/dev-quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy",permalink:"/core-devs/testnet-deploy"},next:{title:"Move Formal Verification",permalink:"/core-devs/formal-verification"}},l={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"If you are running Move tests:",id:"if-you-are-running-move-tests",level:3},{value:"If you are running e2e smoke tests:",id:"if-you-are-running-e2e-smoke-tests",level:3},{value:"Set up environment",id:"set-up-environment",level:2},{value:"Get the DIEM dependencies",id:"get-the-diem-dependencies",level:3},{value:"check env",id:"check-env",level:3},{value:"build executables",id:"build-executables",level:3},{value:"Running Move unit tests",id:"running-move-unit-tests",level:2},{value:"Build a libra framework release for smoke tests (head.mrb)",id:"build-a-libra-framework-release-for-smoke-tests-headmrb",level:2},{value:"Running smoke tests",id:"running-smoke-tests",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"1. Building diem-node",id:"1-building-diem-node",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"libra-move-dev-quick-start",children:"Libra Move Dev Quick Start"})}),"\n",(0,i.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,i.jsx)(n.h3,{id:"if-you-are-running-move-tests",children:"If you are running Move tests:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You must install ",(0,i.jsx)(n.code,{children:"libra"})," cli tool to your PATH."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# in this repo\ncargo build --release -p libra\n\n\n# copy to a dir in your PATH\ncp ./target/release/libra ~/.cargo/bin\n# you may need to make it executable\nchmod +x ~/.cargo/bin/libra\n\n# run framework tests with\ncd ./framework/libra-framework\nlibra move framework test\n\n# run formal verification with\nlibra move framework prove\n"})}),"\n",(0,i.jsx)(n.h3,{id:"if-you-are-running-e2e-smoke-tests",children:"If you are running e2e smoke tests:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You need our fork of ",(0,i.jsx)(n.code,{children:"diem-node"})," before working on ",(0,i.jsx)(n.code,{children:"libra-framework"})]}),"\n",(0,i.jsxs)(n.li,{children:["compile ",(0,i.jsx)(n.code,{children:"diem-node"})," to ",(0,i.jsx)(n.code,{children:"$HOME/.cargo/bin"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'git clone https://github.com/0LNetworkCommunity/diem -b release --single-branch\nexport RUST_DIEM_COIN_MODULE="libra_coin"\nexport RUST_DIEM_COIN_NAME="LibraCoin"\ncd diem\ncargo build --profile cli -p diem-node --target-dir ~/.cargo/bin\n\n# make it executable\nchmod +x ~/.cargo/bin/diem-node\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["export these env vars in your dev env, ",(0,i.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,i.jsx)(n.code,{children:"~/.zshrc"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'export RUST_MIN_STACK=104857600\nexport DIEM_FORGE_NODE_BIN_PATH="$HOME/.cargo/bin/diem-node"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"set-up-environment",children:"Set up environment"}),"\n",(0,i.jsxs)(n.p,{children:["You should have two repos that you are working with. This one ",(0,i.jsx)(n.code,{children:"libra-framework"}),", as well as ",(0,i.jsx)(n.code,{children:"diem"}),". We'll need to build some executables from diem and install them on your dev machine."]}),"\n",(0,i.jsx)(n.h3,{id:"get-the-diem-dependencies",children:"Get the DIEM dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["You need our fork of diem before working on ",(0,i.jsx)(n.code,{children:"libra-framework"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/0LNetworkCommunity/diem -b release --single-branch\n"})}),"\n",(0,i.jsx)(n.h3,{id:"check-env",children:"check env"}),"\n",(0,i.jsxs)(n.p,{children:["This assumes that you have a ",(0,i.jsx)(n.code,{children:"~/.cargo/bin"})," which is added to your environment's $PATH."]}),"\n",(0,i.jsx)(n.h3,{id:"build-executables",children:"build executables"}),"\n",(0,i.jsxs)(n.p,{children:["You want to build the ",(0,i.jsx)(n.code,{children:"diem-node"})," (for smoke tests only)."]}),"\n",(0,i.jsx)(n.p,{children:"There are two environment variables that are needed to use the correct Coin for\ndiem-node instead of a generic."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'export RUST_DIEM_COIN_MODULE="libra_coin"'}),"\n",(0,i.jsx)(n.code,{children:'export RUST_DIEM_COIN_NAME="LibraCoin"'})]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"--profile cli"})," compilation profile makes for much smaller binaries (e.g. ",(0,i.jsx)(n.code,{children:"diem-node"})," goes from about 2GB to 30MB)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# env variables needed for compilation\nexport RUST_DIEM_COIN_MODULE="libra_coin"\nexport RUST_DIEM_COIN_NAME="LibraCoin"\n\n# build it\ncargo build --profile cli -p diem-node --target-dir ~/.cargo/bin\n# see you tomorrow (welcome to Rust).\n\n# next day, make it executable.\nchmod +x ~/.cargo/bin/diem-node\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Just check those executables appear in your path.\n",(0,i.jsx)(n.code,{children:"which diem-node"})]}),"\n",(0,i.jsx)(n.p,{children:"Now you can run commands as below."}),"\n",(0,i.jsx)(n.h2,{id:"running-move-unit-tests",children:"Running Move unit tests"}),"\n",(0,i.jsx)(n.p,{children:"Change into a Move project dir (i.e., the directory with a Move.toml)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"diem move test"})}),"\n",(0,i.jsx)(n.p,{children:"optionally with filters:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"diem move test -f"})}),"\n",(0,i.jsx)(n.h2,{id:"build-a-libra-framework-release-for-smoke-tests-headmrb",children:"Build a libra framework release for smoke tests (head.mrb)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd ./framework\ncargo run release\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Your release will be in ",(0,i.jsx)(n.code,{children:"./releases/head.mrb"}),", you will need this for genesis and smoketests."]}),"\n",(0,i.jsx)(n.p,{children:"Note for smoke tests: you must regenerate the .mrb file EVERYTIME YOU MAKE A CHANGE TO CORE MOVE CODE. Otherwise your tests will be against the old code"}),"\n",(0,i.jsx)(n.h2,{id:"running-smoke-tests",children:"Running smoke tests"}),"\n",(0,i.jsx)(n.p,{children:"Do it yourself:\nMake sure you are in the root of the project."}),"\n",(0,i.jsx)(n.p,{children:"Note: there is an issue with the rust default stack size for tests which involve compiling, and then starting a local testnet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'cd ./smoke-tests\nexport RUST_MIN_STACK=104857600\nexport DIEM_FORGE_NODE_BIN_PATH="$HOME/.cargo/bin/diem-node"\ncargo test\n'})}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h3,{id:"1-building-diem-node",children:"1. Building diem-node"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Issue"})}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter the following error:\n",(0,i.jsx)(n.code,{children:"error[E0599]: no method named disable_lifo_slot found for mutable reference &mut tokio::runtime::Builder in the current scope"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Solution"})}),"\n",(0,i.jsx)(n.p,{children:"You can resolve this issue by building with the following flag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'RUSTFLAGS="--cfg tokio_unstable" cargo build --profile cli -p diem-node --target-dir ~/.cargo/bin\n'})}),"\n",(0,i.jsx)(n.p,{children:"This flag enables the unstable features required by the tokio runtime."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var i=r(7294);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);