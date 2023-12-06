"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[8591],{3567:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(5893),r=t(1151);const a={sidebar_label:"Getting Started",sidebar_position:1,description:"Learn whats involved running a validator on 0L Network"},s="Getting Started",o={id:"validators/getting-started",title:"Getting Started",description:"Learn whats involved running a validator on 0L Network",source:"@site/docs/validators/getting-started.md",sourceDirName:"validators",slug:"/validators/getting-started",permalink:"/validators/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Getting Started",sidebar_position:1,description:"Learn whats involved running a validator on 0L Network"},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/category/validators"},next:{title:"0L Sybil Resistance",permalink:"/validators/0l-sybil-resistance"}},l={},d=[{value:"Validators",id:"validators",level:2},{value:"Validator Operations",id:"validator-operations",level:3},{value:"Key Responsibilities",id:"key-responsibilities",level:4},{value:"Selection Process",id:"selection-process",level:3},{value:"High-Level Steps for Validator Selection",id:"high-level-steps-for-validator-selection",level:4},{value:"Compliance Requirements for Validators",id:"compliance-requirements-for-validators",level:3},{value:"Overview",id:"overview",level:4},{value:"Detailed Compliance Criteria",id:"detailed-compliance-criteria",level:4},{value:"Further Insights",id:"further-insights",level:4},{value:"Validator Rewards Structure",id:"validator-rewards-structure",level:3},{value:"Reward Distribution",id:"reward-distribution",level:4},{value:"Fund Origin and Decision Making",id:"fund-origin-and-decision-making",level:4},{value:"How to become a Validator",id:"how-to-become-a-validator",level:3}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"validators",children:"Validators"}),"\n",(0,n.jsx)(i.p,{children:"Participating as a validator on the 0L Network is an open and permissionless process, accessible to all. The community is supportive and eager to assist those passionate about contributing to the network's security. However, it's important to note that this role comes with certain responsibilities, as outlined below, along with corresponding rewards for the efforts made."}),"\n",(0,n.jsx)(i.h3,{id:"validator-operations",children:"Validator Operations"}),"\n",(0,n.jsx)(i.h4,{id:"key-responsibilities",children:"Key Responsibilities"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Continuous Operation"}),": Validators must ensure their systems are operational 24/7."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Technical Expertise"}),": A background in System Administration and DevOps is essential for those looking to become Validators."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Network Maintenance"}),": Validators play a critical role in maintaining the network's integrity and are responsible for proposing blocks within the Libra network.."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"selection-process",children:"Selection Process"}),"\n",(0,n.jsxs)(i.p,{children:["OL Network uses the ",(0,n.jsx)(i.a,{href:"https://github.com/0LNetworkCommunity/libra-framework",children:"Libra Framework"})," that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's consensus mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, 0L Network employs a unique auction-based system for validator selection."]}),"\n",(0,n.jsx)(i.p,{children:"In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee \u2014 equal to the lowest accepted bid in the auction."}),"\n",(0,n.jsx)(i.h4,{id:"high-level-steps-for-validator-selection",children:"High-Level Steps for Validator Selection"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bidding Process"}),": Prospective validators submit their bids during the Proof of Fee (PoF) auction for a specified number of epochs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Epoch Transition and Seat Availability"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"At each epoch change, the number of available seats for validators is determined. This depends on factors such as network performance, interest level among validators, and the number of epochs the network has been operational."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Seat Allocation"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Seats are allocated starting from the highest bid to the lowest, until either all the validators are included or all the seats are filled."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Payment by Selected Validators"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Validators who are chosen in the set pay an amount equal to the lowest bid within that set."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Repetition of Process"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This selection and bidding process is repeated at the beginning of each new epoch."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"compliance-requirements-for-validators",children:"Compliance Requirements for Validators"}),"\n",(0,n.jsx)(i.h4,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:["To participate in the bidding process for the next epoch, validators must maintain compliance. Non-compliant validators at the time of an epoch change will be ",(0,n.jsx)(i.a,{href:"/tools/txs/validator#manage-jail-operations",children:"jailed"})," and must be unjailed by one of the active validators to re-enter the process."]}),"\n",(0,n.jsx)(i.h4,{id:"detailed-compliance-criteria",children:"Detailed Compliance Criteria"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"For New Entrants"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Obtain 2 ",(0,n.jsx)(i.a,{href:"/tools/txs/validator#manage-vouching-operations",children:"vouches"})," from existing validators, ensuring no shared ancestry."]}),"\n",(0,n.jsx)(i.li,{children:"Submit a bid that ranks among the highest in comparison to others, relative to the number of available validator seats. Essentially, the bid should be sufficiently competitive to fall within the range of top bids for the given number of validator seats."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"For Existing Epoch Validators"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Fulfill all requirements applicable to new entrants."}),"\n",(0,n.jsx)(i.li,{children:"Ensure the number of successfully proposed blocks exceeds the number of failed blocks."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"further-insights",children:"Further Insights"}),"\n",(0,n.jsxs)(i.p,{children:["For an in-depth exploration of these guidelines and their underlying principles, refer to the comprehensive discussions in these papers: ",(0,n.jsx)(i.a,{href:"https://0l.network/2022/10/15/proof-of-fee-part-1/",children:"Proof of Fee Part 1"})," and ",(0,n.jsx)(i.a,{href:"https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/",children:"Proof of Fee Part 2: A Proposal"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"validator-rewards-structure",children:"Validator Rewards Structure"}),"\n",(0,n.jsx)(i.h4,{id:"reward-distribution",children:"Reward Distribution"}),"\n",(0,n.jsxs)(i.p,{children:["Validators demonstrating high performance are awarded at the conclusion of each epoch, approximately every 24 hours. The source of these rewards is the ",(0,n.jsx)(i.a,{href:"https://0l.network/2022/10/11/proposal-2210-8-infrastructure-escrow-funding/",children:"Infrastructure Ecosystem Pledge"}),", established following the network's upgrade from version 5 to version 6.9.0. This fund was primarily contributed to by both current and former validators, as well as the wider community."]}),"\n",(0,n.jsx)(i.h4,{id:"fund-origin-and-decision-making",children:"Fund Origin and Decision Making"}),"\n",(0,n.jsxs)(i.p,{children:["Details on the formation of this fund and the associated decision-making process are outlined in the ",(0,n.jsx)(i.a,{href:"https://0l.network/2023/05/23/team-arctika-recommendation/",children:"Arctika Recommendation"}),". The establishment of the reward amount per epoch and the basis of the fund itself were influenced by several key factors:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'A projected reward sustainability (or "runway") of approximately 10 years.'}),"\n",(0,n.jsx)(i.li,{children:"Setting reward amounts comparable to prevailing industry standards, assuming the network achieves a valuation close to $100 million."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"These measures aim to incentivize consistent and effective network performance by validators, aligning with broader industry norms and long-term network health."}),"\n",(0,n.jsx)(i.h3,{id:"how-to-become-a-validator",children:"How to become a Validator"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/validators/detailed-instructions",children:"Configure and setup your machine"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/validators/restore",children:"Sync Database to the current version"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/validators/register",children:"Register your Validator"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>s});var n=t(7294);const r={},a=n.createContext(r);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);