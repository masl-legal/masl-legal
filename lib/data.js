// ==========================================
// MASL LEGAL — Centralized Site Data
// ==========================================

// --- SECTORS ---
export const sectors = [
  {
    name: 'Business & Commercial',
    slug: 'business-commercial',
    href: '/sectors/business-commercial',
    tagline: 'The future of business.',
    introLeft: 'We are a leading multi-disciplinary law firm distinguished by one key difference: delivering tailored, expert advice to every client.',
    introRight: 'By investing time to understand each organisation\'s unique operations, our lawyers provide personalised legal solutions across a broad range of commercial services. Our proven expertise covers the full spectrum — both regulatory and commercial — including everything from drafting complex agreements to strategic business planning.',
    expertise: ['commercial-law', 'corporate-law', 'e-commerce-law', 'consumer-protection'],
  },
  {
    name: 'International & Trade',
    slug: 'international-trade',
    href: '/sectors/international-trade',
    tagline: 'Global reach, local expertise.',
    introLeft: 'Navigating cross-border legal challenges requires a firm that understands both international frameworks and local jurisdictions.',
    introRight: 'Our international and trade team advises businesses on the full spectrum of cross-border legal matters, from customs compliance and trade regulations to AI governance and intellectual property protection. We help clients operate confidently across borders with strategic advice grounded in deep regulatory knowledge.',
    expertise: ['international-trade-law', 'international-customs', 'ai-law', 'ip-law'],
  },
  {
    name: 'Dispute Resolution & Litigation',
    slug: 'dispute-resolution',
    href: '/sectors/dispute-resolution',
    tagline: 'Strategic resolution, decisive outcomes.',
    introLeft: 'When disputes arise, you need lawyers who combine strategic thinking with decisive action to protect your interests.',
    introRight: 'Our dispute resolution team handles complex commercial disputes, criminal matters, cyber-related offences, and international arbitration. We focus on achieving the best possible outcome through negotiation where possible and robust litigation when necessary. Our approach is pragmatic, cost-conscious, and always focused on your objectives.',
    expertise: ['dispute-resolution', 'arbitration', 'criminal-law', 'cybercrime-law'],
  },
  {
    name: 'Regulatory & Advisory',
    slug: 'regulatory-advisory',
    href: '/sectors/regulatory-advisory',
    tagline: 'Clarity in complexity.',
    introLeft: 'Regulation touches every aspect of business. Our advisory team helps you navigate complexity with confidence.',
    introRight: 'From employment law compliance to tax planning and constitutional matters, our regulatory team provides clear, practical advice that enables businesses and individuals to operate within the law while achieving their goals. We stay ahead of legislative changes so our clients are always prepared.',
    expertise: ['employment-law', 'taxation-law', 'constitutional-law'],
  },
];

// --- EXPERTISE ---
export const expertiseAreas = [
  {
    name: 'Commercial Law',
    slug: 'commercial-law',
    href: '/expertise/commercial-law',
    sector: 'business-commercial',
    sectorName: 'Business & Commercial',
    tagline: 'Strategic solutions for commercial success.',
    description: 'Comprehensive commercial legal solutions for businesses of all sizes, from contract negotiations to complex commercial transactions.',
    introLeft: 'Our commercial law team provides the full range of commercial legal services that modern businesses require. From early-stage ventures to established enterprises, we deliver practical, commercially-minded advice that supports your growth and protects your interests.',
    introRight: 'We understand that every commercial transaction carries both opportunity and risk. Our lawyers work closely with clients to identify strategic advantages, mitigate potential liabilities, and structure agreements that stand the test of time. Whether you are negotiating a significant supply contract, entering a joint venture, or restructuring commercial arrangements, our team brings depth, precision and commercial awareness to every matter.',
    sections: [
      {
        heading: 'Contract Drafting & Negotiation',
        left: 'Tailored commercial agreements that protect your position and support your strategic objectives.',
        right: 'We draft and negotiate a wide range of commercial contracts including supply agreements, distribution arrangements, licensing deals, service contracts, and framework agreements. Our approach combines legal rigour with commercial pragmatism, ensuring your contracts are both enforceable and commercially viable. We also conduct thorough reviews of counterparty contracts, identifying risks and negotiating favourable amendments on your behalf.',
      },
      {
        heading: 'Joint Ventures & Strategic Partnerships',
        left: 'Structuring collaborative arrangements that balance opportunity with protection for all parties.',
        right: 'Joint ventures and strategic partnerships require careful structuring to align the interests of all parties. We advise on the formation, governance, and documentation of joint ventures, including shareholder agreements, management arrangements, and exit mechanisms. Our experience spans domestic and cross-border partnerships across multiple sectors, and we understand the commercial dynamics that make these arrangements succeed.',
      },
      {
        heading: 'Commercial Dispute Prevention',
        left: 'Proactive legal strategies designed to minimise the risk of costly commercial disputes.',
        right: 'The best approach to commercial disputes is preventing them. We work with clients to implement robust contractual frameworks, clear terms of business, and effective dispute resolution clauses. Our team conducts regular contract audits, identifies potential areas of vulnerability, and advises on risk management strategies that keep your business operating smoothly and reduce exposure to litigation.',
      },
      {
        heading: 'Regulatory Compliance & Commercial Advisory',
        left: 'Navigating the regulatory landscape to ensure your commercial operations remain fully compliant.',
        right: 'UK commercial law is underpinned by a complex regulatory framework. We advise businesses on compliance with the Competition Act 1998, the Consumer Rights Act 2015, the Sale of Goods Act, and sector-specific regulations. Our team monitors legislative developments to ensure your commercial practices remain compliant, and we provide practical guidance on adapting operations to meet evolving regulatory requirements.',
      },
    ],
  },
  {
    name: 'Corporate Law & Governance',
    slug: 'corporate-law',
    href: '/expertise/corporate-law',
    sector: 'business-commercial',
    sectorName: 'Business & Commercial',
    tagline: 'Building stronger businesses through better governance.',
    description: 'Expert guidance on corporate structure, compliance, and governance to ensure your business operates within legal frameworks.',
    introLeft: 'Effective corporate governance is the foundation of sustainable business success. Our corporate law team advises companies of all sizes on the legal frameworks that shape how businesses are structured, managed, and held accountable.',
    introRight: 'From company formation to complex restructuring, we provide the strategic guidance directors and shareholders need to make informed decisions. Our advice is practical, commercially focused, and always aligned with your long-term business objectives. We work across all sectors and understand the unique governance challenges that different industries face.',
    sections: [
      {
        heading: 'Company Formation & Structuring',
        left: 'Establishing the right corporate structure from the outset to support growth and minimise liability.',
        right: 'We advise on the formation and structuring of companies, limited liability partnerships, and other business entities. Our team helps you choose the optimal corporate structure based on your business objectives, tax considerations, and growth plans. We prepare all constitutional documents including articles of association, shareholder agreements, and partnership deeds, ensuring they are tailored to your specific requirements.',
      },
      {
        heading: 'Directors\' Duties & Board Advisory',
        left: 'Guiding directors through their statutory obligations and fiduciary responsibilities under UK law.',
        right: 'Directors face a complex web of duties under the Companies Act 2006 and common law. We advise boards on their obligations including the duty to promote the success of the company, the duty to exercise independent judgment, and the duty to avoid conflicts of interest. Our team provides ongoing board advisory services, helping directors navigate difficult decisions, manage stakeholder relationships, and maintain proper corporate records.',
      },
      {
        heading: 'Mergers, Acquisitions & Disposals',
        left: 'End-to-end transactional support for buying, selling, and restructuring businesses.',
        right: 'Our corporate transactions team handles the full lifecycle of M&A activity, from initial due diligence through to completion and post-completion integration. We advise buyers and sellers on share purchases, asset acquisitions, management buyouts, and corporate reorganisations. Our approach is thorough yet efficient — we focus on identifying and managing key risks while maintaining commercial momentum throughout the transaction.',
      },
      {
        heading: 'Corporate Compliance & Reporting',
        left: 'Ensuring your company meets all statutory filing and compliance obligations.',
        right: 'UK companies must comply with extensive reporting and filing requirements. We advise on annual compliance obligations including confirmation statements, accounts filing, PSC register maintenance, and statutory record keeping. Our team also assists with Companies House filings, share capital changes, and registered office changes, ensuring your company remains in good standing and avoids penalties.',
      },
    ],
  },
  {
    name: 'E-Commerce Law',
    slug: 'e-commerce-law',
    href: '/expertise/e-commerce-law',
    sector: 'business-commercial',
    sectorName: 'Business & Commercial',
    tagline: 'Legal infrastructure for the digital economy.',
    description: 'Digital commerce legal infrastructure and compliance for online businesses and digital platforms.',
    introLeft: 'The digital economy operates at pace, and businesses trading online face a unique set of legal obligations. Our e-commerce law team helps digital businesses build compliant, scalable legal frameworks that support growth while managing regulatory risk.',
    introRight: 'From marketplace platforms to direct-to-consumer brands, we advise on the full spectrum of e-commerce legal issues including online terms of business, platform liability, digital consumer rights, payment processing compliance, and cross-border digital trade. Our advice is practical, technology-aware, and designed for the realities of digital commerce.',
    sections: [
      {
        heading: 'Online Terms & Consumer Compliance',
        left: 'Drafting compliant website terms, privacy policies, and consumer-facing documentation for digital businesses.',
        right: 'Every online business requires a robust set of legal terms including terms and conditions of sale, website terms of use, privacy policies, and cookie policies. We draft these documents to comply with the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, the Consumer Rights Act 2015, and UK GDPR. Our terms are clear, enforceable, and written in language that builds customer trust while protecting your business.',
      },
      {
        heading: 'Platform & Marketplace Regulation',
        left: 'Navigating the complex legal landscape governing online platforms and digital marketplaces.',
        right: 'Online platforms face a rapidly evolving regulatory environment. We advise on platform liability under the Online Safety Act, intermediary obligations, content moderation requirements, and seller verification processes. For marketplace operators, we structure the legal relationships between platforms, sellers, and buyers, including commission arrangements, dispute resolution mechanisms, and platform terms of service.',
      },
      {
        heading: 'Digital Payments & Financial Regulation',
        left: 'Ensuring your payment processing and fintech integrations meet UK financial regulatory requirements.',
        right: 'Digital payment processing involves compliance with the Payment Services Regulations 2017, the Electronic Money Regulations 2011, and FCA guidance. We advise e-commerce businesses on payment gateway agreements, stored value regulations, subscription billing compliance, and anti-money laundering obligations. Our team also assists with buy-now-pay-later compliance and open banking integrations.',
      },
      {
        heading: 'Cross-Border Digital Trade',
        left: 'Managing the legal complexities of selling digital products and services internationally.',
        right: 'Selling across borders introduces additional legal considerations including VAT obligations, customs duties on physical goods, data transfer restrictions, and jurisdiction-specific consumer protection requirements. We advise on EU e-commerce regulations post-Brexit, international digital services tax, and the structuring of cross-border digital supply chains to ensure compliance and minimise tax exposure.',
      },
    ],
  },
  {
    name: 'Consumer Protection Law',
    slug: 'consumer-protection',
    href: '/expertise/consumer-protection',
    sector: 'business-commercial',
    sectorName: 'Business & Commercial',
    tagline: 'Protecting consumers, empowering businesses.',
    description: 'Comprehensive consumer rights protection and regulatory compliance for businesses serving consumers.',
    introLeft: 'Consumer protection legislation in the UK is extensive and strictly enforced. Our team helps businesses understand their obligations and build compliance frameworks that protect both consumers and the business itself.',
    introRight: 'We advise on the full range of consumer protection issues, from product safety and advertising standards to complaint handling and regulatory investigations. Our practical approach helps businesses meet their legal obligations without unnecessary bureaucracy, creating consumer trust while minimising regulatory risk.',
    sections: [
      {
        heading: 'Consumer Rights & Remedies',
        left: 'Advising businesses on their obligations under the Consumer Rights Act 2015 and related legislation.',
        right: 'The Consumer Rights Act 2015 sets out comprehensive rights for consumers purchasing goods, services, and digital content. We advise businesses on quality standards, the right to repair or replace, refund obligations, and the enforceability of terms and conditions. Our team helps you implement compliant returns policies, warranty frameworks, and customer service procedures that meet legal requirements while maintaining positive customer relationships.',
      },
      {
        heading: 'Advertising & Marketing Compliance',
        left: 'Ensuring your marketing practices comply with the CAP Code, ASA guidelines, and consumer protection regulations.',
        right: 'Marketing and advertising activities are regulated by the Advertising Standards Authority, the Competition and Markets Authority, and various statutory instruments. We advise on truthful advertising obligations, price comparison rules, promotional offer compliance, influencer marketing regulations, and environmental claims. Our team reviews marketing materials before publication and assists businesses responding to ASA complaints or CMA investigations.',
      },
      {
        heading: 'Product Safety & Liability',
        left: 'Navigating product safety regulations and managing product liability risk across supply chains.',
        right: 'Businesses placing products on the UK market must comply with the General Product Safety Regulations 2005, sector-specific safety standards, and product labelling requirements. We advise on product safety assessments, recall procedures, supply chain liability, and insurance arrangements. When product liability claims arise, our team provides robust defence strategies while managing reputational risk.',
      },
      {
        heading: 'Regulatory Investigations & Enforcement',
        left: 'Representing businesses in CMA, Trading Standards, and sector regulator investigations and enforcement actions.',
        right: 'When regulatory bodies investigate consumer protection concerns, the consequences can be significant including enforcement orders, fines, and criminal prosecution. We represent businesses at every stage of regulatory investigations, from initial information requests through to contested hearings. Our team has experience dealing with the Competition and Markets Authority, local authority Trading Standards, and sector-specific regulators.',
      },
    ],
  },
  {
    name: 'International Trade Law',
    slug: 'international-trade-law',
    href: '/expertise/international-trade-law',
    sector: 'international-trade',
    sectorName: 'International & Trade',
    tagline: 'Navigating global markets with confidence.',
    description: 'Global trade compliance and cross-border legal solutions for international business operations.',
    introLeft: 'International trade presents significant opportunities for UK businesses, but the regulatory landscape is complex and constantly evolving. Our international trade law team provides the strategic guidance businesses need to trade globally with confidence.',
    introRight: 'We advise on trade agreements, export controls, sanctions compliance, and cross-border regulatory frameworks. Our team combines deep technical knowledge with practical commercial experience, helping clients navigate the complexities of post-Brexit trade, manage compliance obligations, and resolve cross-border disputes efficiently.',
    sections: [
      {
        heading: 'Trade Agreements & Market Access',
        left: 'Leveraging bilateral and multilateral trade agreements to maximise market access and reduce tariff barriers.',
        right: 'The UK has established an independent trade policy framework following Brexit, including free trade agreements with the EU, Australia, Japan, and numerous other trading partners. We advise businesses on how to leverage these agreements for preferential tariff treatment, rules of origin compliance, and market access for goods and services. Our team monitors ongoing trade negotiations and advises on the practical implications of new agreements as they enter into force.',
      },
      {
        heading: 'Export Controls & Sanctions',
        left: 'Ensuring full compliance with UK export control regulations and international sanctions regimes.',
        right: 'Export of controlled goods, technology, and software is regulated by the Export Control Act 2002 and associated legislation. We advise on export licensing requirements, end-use controls, military and dual-use goods classifications, and sanctions compliance under the Sanctions and Anti-Money Laundering Act 2018. Our team assists with OFSI licence applications, internal compliance programme development, and due diligence frameworks for high-risk transactions.',
      },
      {
        heading: 'Cross-Border Dispute Resolution',
        left: 'Resolving international commercial disputes through litigation, arbitration, and alternative dispute resolution.',
        right: 'Cross-border trade disputes often involve complex jurisdictional issues, choice of law questions, and enforcement challenges. We advise on dispute resolution clauses, international arbitration under ICC, LCIA, and UNCITRAL rules, and the enforcement of foreign judgments and awards. Our team represents clients in multi-jurisdictional disputes and works with local counsel networks to provide coordinated global strategies.',
      },
      {
        heading: 'WTO & International Regulatory Frameworks',
        left: 'Advising on World Trade Organisation rules and international regulatory standards affecting global commerce.',
        right: 'International trade is governed by a framework of WTO agreements, bilateral treaties, and international regulatory standards. We advise governments and businesses on WTO dispute settlement, trade remedy investigations including anti-dumping and countervailing duties, and compliance with international standards organisations. Our team also advises on the trade aspects of emerging regulatory frameworks including digital trade rules and environmental standards.',
      },
    ],
  },
  {
    name: 'International Customs',
    slug: 'international-customs',
    href: '/expertise/international-customs',
    sector: 'international-trade',
    sectorName: 'International & Trade',
    tagline: 'Seamless cross-border compliance.',
    description: 'International customs law and trade compliance services for cross-border commercial operations.',
    introLeft: 'Customs compliance is a critical element of international trade, directly affecting supply chain efficiency, cost management, and regulatory standing. Our customs law team provides specialist advice on all aspects of UK and international customs law.',
    introRight: 'Since Brexit, UK businesses face a significantly more complex customs landscape. We help importers and exporters navigate customs declarations, tariff classifications, origin determinations, and duty relief schemes. Our practical, solutions-oriented approach ensures businesses maintain compliance while optimising their customs costs.',
    sections: [
      {
        heading: 'Customs Classification & Valuation',
        left: 'Accurate tariff classification and customs valuation to ensure correct duty payments and avoid penalties.',
        right: 'The correct classification of goods under the UK Global Tariff determines the applicable duty rate and any preferential treatment available. We advise on tariff classification disputes, binding tariff information applications, and customs valuation methodology under the WTO Customs Valuation Agreement. Our team assists businesses in establishing reliable classification and valuation processes, reducing the risk of underpayment or overpayment of duties.',
      },
      {
        heading: 'Duty Relief & Special Procedures',
        left: 'Maximising the use of duty relief schemes and special customs procedures to reduce import costs.',
        right: 'UK customs law provides a range of duty relief schemes including inward processing, outward processing, temporary admission, and customs warehousing. We advise businesses on eligibility, application procedures, and ongoing compliance requirements for these special procedures. Our team also advises on free zone operations, returned goods relief, and end-use duty relief, helping businesses structure their supply chains to minimise customs costs.',
      },
      {
        heading: 'Post-Brexit Trade Compliance',
        left: 'Managing the customs implications of the UK-EU Trade and Cooperation Agreement and other post-Brexit arrangements.',
        right: 'The UK-EU Trade and Cooperation Agreement provides for zero-tariff, zero-quota trade in goods that meet the relevant rules of origin. We advise businesses on origin determination, supplier declarations, the accumulation of origin, and proof of origin documentation. Our team also advises on the Northern Ireland Protocol, the Windsor Framework, and their practical implications for businesses trading between Great Britain and Northern Ireland.',
      },
      {
        heading: 'HMRC Investigations & Customs Disputes',
        left: 'Representing businesses in HMRC customs investigations and appeals before the Tax Tribunal.',
        right: 'HMRC actively investigates customs compliance, and the penalties for non-compliance can be substantial. We represent businesses at all stages of HMRC customs investigations, from initial enquiries through to formal assessments and penalty proceedings. Our team has experience in First-tier Tribunal and Upper Tribunal appeals on customs classification, valuation, and origin disputes, and we work to achieve the best possible outcome for our clients.',
      },
    ],
  },
  {
    name: 'AI Law & Governance',
    slug: 'ai-law',
    href: '/expertise/ai-law',
    sector: 'international-trade',
    sectorName: 'International & Trade',
    tagline: 'Shaping the legal framework for tomorrow\'s technology.',
    description: 'Cutting-edge AI governance, compliance, and legal framework development for emerging technologies.',
    introLeft: 'Artificial intelligence is transforming industries and creating new legal challenges that traditional frameworks were not designed to address. Our AI law team sits at the intersection of technology and regulation, helping businesses harness AI responsibly.',
    introRight: 'We advise on the full spectrum of AI legal issues including algorithmic accountability, data governance, intellectual property implications, liability frameworks, and regulatory compliance. As governments worldwide develop AI-specific regulations, our team provides forward-looking advice that helps businesses innovate while managing legal and ethical risk.',
    sections: [
      {
        heading: 'AI Regulatory Compliance',
        left: 'Navigating the UK\'s pro-innovation regulatory framework and preparing for the impact of the EU AI Act on UK businesses.',
        right: 'The UK has adopted a sector-specific, principles-based approach to AI regulation, while the EU AI Act introduces a comprehensive risk-based framework. We advise UK businesses on compliance with both regimes, particularly where they supply AI systems or services into the EU market. Our team helps clients understand risk classifications, conformity assessment requirements, transparency obligations, and documentation standards under both frameworks.',
      },
      {
        heading: 'Algorithmic Accountability & Bias',
        left: 'Ensuring AI systems operate fairly and transparently, with appropriate mechanisms for accountability.',
        right: 'AI systems can perpetuate and amplify bias in ways that create legal liability under equality, data protection, and consumer protection legislation. We advise on algorithmic impact assessments, bias testing methodologies, explainability requirements, and the development of internal governance frameworks for AI decision-making. Our team helps organisations establish responsible AI practices that meet legal requirements and build stakeholder trust.',
      },
      {
        heading: 'AI & Intellectual Property',
        left: 'Addressing the complex IP questions arising from AI-generated works and AI-assisted innovation.',
        right: 'The intersection of AI and intellectual property raises fundamental questions about authorship, inventorship, and ownership. We advise on the protectability of AI-generated outputs, the use of copyrighted materials in training data, patent applications involving AI-assisted inventions, and the contractual allocation of IP rights in AI development agreements. Our team monitors rapidly evolving case law and legislative developments in this area.',
      },
      {
        heading: 'AI Procurement & Contracting',
        left: 'Structuring AI development, licensing, and deployment agreements that allocate risk appropriately.',
        right: 'AI procurement involves unique contractual considerations including data rights, model ownership, performance guarantees, liability allocation, and ongoing governance obligations. We draft and negotiate AI development agreements, SaaS contracts for AI-powered services, and data licensing arrangements. Our contracts address key issues including training data provenance, model drift, audit rights, and termination provisions that protect our clients\' interests.',
      },
    ],
  },
  {
    name: 'Intellectual Property Law',
    slug: 'ip-law',
    href: '/expertise/ip-law',
    sector: 'international-trade',
    sectorName: 'International & Trade',
    tagline: 'Protecting what makes your business unique.',
    description: 'Comprehensive IP protection and portfolio development to safeguard your innovations and creative assets.',
    introLeft: 'Intellectual property is often a business\'s most valuable asset. Our IP team provides comprehensive protection strategies that safeguard your innovations, brands, and creative works across all jurisdictions.',
    introRight: 'We advise on the full spectrum of IP matters including trade mark registration, patent strategy, copyright protection, trade secrets, and design rights. Our team combines legal expertise with commercial understanding to develop IP strategies that support business growth, deter infringement, and maximise the value of your intellectual property portfolio.',
    sections: [
      {
        heading: 'Trade Mark Registration & Protection',
        left: 'Building and protecting brand identity through strategic trade mark registration and enforcement.',
        right: 'Your brand is a critical business asset. We advise on trade mark clearance searches, UK and international registration strategies, and portfolio management. Our team handles trade mark applications through the UK Intellectual Property Office and WIPO Madrid System, manages opposition and invalidity proceedings, and enforces trade mark rights against infringers. We also advise on brand licensing, co-existence agreements, and domain name disputes.',
      },
      {
        heading: 'Patent Strategy & Innovation',
        left: 'Protecting technological innovations through strategic patent filing and portfolio development.',
        right: 'Patents provide powerful protection for technological innovations. We advise on patentability assessments, filing strategies through the UKIPO, EPO, and PCT systems, and patent portfolio management. Our team assists with patent licensing negotiations, freedom-to-operate analyses, and patent enforcement actions. We work closely with patent attorneys to develop comprehensive protection strategies that align with your innovation roadmap and commercial objectives.',
      },
      {
        heading: 'Copyright & Creative Rights',
        left: 'Protecting creative works and managing copyright in the digital age.',
        right: 'Copyright protection arises automatically in the UK but managing and enforcing those rights requires strategic expertise. We advise on copyright ownership, assignment and licensing, moral rights, and database rights. Our team handles copyright infringement claims, DMCA and notice-and-takedown procedures, and the complex copyright issues that arise in digital content creation, software development, and AI-generated works.',
      },
      {
        heading: 'IP Enforcement & Dispute Resolution',
        left: 'Vigorous enforcement of IP rights through negotiation, litigation, and alternative dispute resolution.',
        right: 'When IP rights are infringed, swift and effective action is essential. We handle all aspects of IP enforcement including cease and desist correspondence, interim injunctions, Intellectual Property Enterprise Court and High Court proceedings, and alternative dispute resolution. Our team also defends businesses against claims of IP infringement, providing robust defence strategies that protect your right to operate.',
      },
    ],
  },
  {
    name: 'Dispute Resolution',
    slug: 'dispute-resolution',
    href: '/expertise/dispute-resolution',
    sector: 'dispute-resolution',
    sectorName: 'Dispute Resolution & Litigation',
    tagline: 'Resolving conflicts, preserving relationships.',
    description: 'Comprehensive dispute resolution services including mediation, negotiation, and litigation support.',
    introLeft: 'Commercial disputes can be disruptive, expensive, and damaging to business relationships. Our dispute resolution team takes a strategic, outcomes-focused approach that prioritises resolution while protecting your interests.',
    introRight: 'We handle the full spectrum of commercial disputes, from pre-action negotiations and mediation to High Court and appellate litigation. Our team is known for its analytical rigour, strategic creativity, and ability to achieve favourable outcomes efficiently. We always consider the commercial context and advise on the most appropriate dispute resolution method for each situation.',
    sections: [
      {
        heading: 'Commercial Litigation',
        left: 'Representing clients in complex commercial disputes before the Business and Property Courts and appellate courts.',
        right: 'Our commercial litigation team handles high-value disputes including breach of contract claims, partnership and shareholder disputes, professional negligence actions, and fraud claims. We manage cases through the Business and Property Courts of England and Wales, the Court of Appeal, and the Supreme Court. Our approach combines thorough preparation with strategic litigation management, always with an eye on achieving the best commercial outcome for our clients.',
      },
      {
        heading: 'Mediation & Negotiation',
        left: 'Achieving settlement through skilled mediation and negotiation, preserving commercial relationships.',
        right: 'Many disputes are best resolved through negotiation or mediation rather than contested litigation. We are experienced advocates in mediation proceedings and skilled negotiators who understand the dynamics of commercial dispute resolution. Our team prepares comprehensive position papers, identifies creative settlement options, and works to achieve outcomes that meet our clients\' commercial objectives while preserving important business relationships.',
      },
      {
        heading: 'Injunctive Relief & Emergency Remedies',
        left: 'Obtaining urgent court orders to protect your interests when immediate action is required.',
        right: 'When commercial interests are under immediate threat, urgent court action may be necessary. We apply for freezing orders, search orders, interim injunctions, and other emergency remedies on short notice. Our team has extensive experience in without-notice applications, contested interim hearings, and the management of urgent cross-border relief applications. We move quickly and effectively when time is of the essence.',
      },
      {
        heading: 'Debt Recovery & Enforcement',
        left: 'Efficient recovery of outstanding debts through strategic enforcement and insolvency procedures.',
        right: 'Unpaid debts can seriously impact cash flow and business viability. We provide a full debt recovery service from initial demand through to enforcement of judgment. Our approach includes statutory demand procedures, winding-up petitions, charging orders, third-party debt orders, and enforcement through the High Court Enforcement Officers. We assess the most effective and cost-proportionate enforcement strategy for each case.',
      },
    ],
  },
  {
    name: 'Arbitration',
    slug: 'arbitration',
    href: '/expertise/arbitration',
    sector: 'dispute-resolution',
    sectorName: 'Dispute Resolution & Litigation',
    tagline: 'Efficient, expert dispute resolution.',
    description: 'Arbitration services for commercial disputes, providing efficient and cost-effective resolution mechanisms.',
    introLeft: 'Arbitration offers a private, flexible, and internationally enforceable method of resolving commercial disputes. Our arbitration team provides expert representation in domestic and international arbitration proceedings.',
    introRight: 'We advise on arbitration clause drafting, seat selection, arbitrator appointments, and procedural strategy. Our team has extensive experience under the rules of leading arbitral institutions including the LCIA, ICC, ICSID, and UNCITRAL. We combine technical arbitration expertise with deep sector knowledge to deliver compelling advocacy and achieve favourable outcomes for our clients.',
    sections: [
      {
        heading: 'International Commercial Arbitration',
        left: 'Representing parties in complex international arbitration proceedings under institutional and ad hoc rules.',
        right: 'Our international arbitration practice handles disputes arising from cross-border commercial transactions, joint ventures, construction projects, and investment treaties. We represent claimants and respondents under LCIA, ICC, ICSID, SCC, and UNCITRAL rules, and we have experience with arbitrations seated in London, Paris, Geneva, Singapore, and other major arbitration centres. Our team manages multi-jurisdictional arbitrations with efficiency and strategic precision.',
      },
      {
        heading: 'Arbitration Clause Drafting',
        left: 'Crafting effective arbitration agreements that provide certainty and avoid procedural disputes.',
        right: 'A well-drafted arbitration clause is essential to an effective dispute resolution framework. We advise on institutional versus ad hoc arbitration, seat selection, governing law, language provisions, multi-party and multi-contract arbitration mechanisms, and emergency arbitrator provisions. Our clauses are designed to be enforceable, practical, and aligned with our clients\' commercial objectives and dispute resolution preferences.',
      },
      {
        heading: 'Arbitral Award Enforcement',
        left: 'Enforcing arbitral awards domestically and internationally under the New York Convention.',
        right: 'The enforceability of arbitral awards is one of arbitration\'s key advantages. We advise on the enforcement of awards under the Arbitration Act 1996 and the New York Convention across multiple jurisdictions. Our team also handles challenges to awards on grounds of serious irregularity and jurisdictional objections, and we advise on strategies for securing assets pending enforcement through freezing orders and other interim measures.',
      },
      {
        heading: 'Investor-State Arbitration',
        left: 'Representing investors and states in bilateral investment treaty disputes and ICSID proceedings.',
        right: 'Investor-state arbitration protects foreign investors against unfair treatment by host states. We advise investors on the protections available under bilateral investment treaties, free trade agreements, and the ICSID Convention. Our team handles claims for expropriation, fair and equitable treatment violations, and denial of justice, working to secure appropriate compensation for our clients\' investments.',
      },
    ],
  },
  {
    name: 'Criminal Law',
    slug: 'criminal-law',
    href: '/expertise/criminal-law',
    sector: 'dispute-resolution',
    sectorName: 'Dispute Resolution & Litigation',
    tagline: 'Robust defence, principled representation.',
    description: 'Expert criminal defence and prosecution services with comprehensive legal representation.',
    introLeft: 'Criminal allegations demand immediate, expert legal representation. Our criminal law team provides robust defence at every stage of criminal proceedings, from police station attendance through to Crown Court trial and appeal.',
    introRight: 'We represent individuals and businesses facing criminal investigations and prosecutions across a wide range of offences. Our team combines detailed legal knowledge with persuasive advocacy, ensuring that our clients receive the highest standard of representation. We understand the stress and uncertainty that criminal proceedings cause, and we provide clear, honest advice throughout the process.',
    sections: [
      {
        heading: 'Serious & Complex Crime',
        left: 'Defending clients accused of the most serious criminal offences including fraud, serious violence, and organised crime.',
        right: 'Our serious crime team handles cases of the greatest complexity and sensitivity. We defend clients facing charges of fraud, money laundering, serious violence, drug trafficking, and organised crime. Our lawyers are experienced advocates in the Crown Court and have appeared in numerous high-profile and legally complex cases. We work with leading barristers, forensic experts, and investigators to build the strongest possible defence for our clients.',
      },
      {
        heading: 'Corporate Crime & Regulatory Prosecution',
        left: 'Defending businesses and directors against corporate criminal charges and regulatory prosecutions.',
        right: 'Businesses and their directors face an expanding range of criminal and regulatory liability. We defend against charges brought under the Bribery Act 2010, the Health and Safety at Work Act 1974, environmental legislation, and financial services regulations. Our team advises on corporate criminal liability, the failure to prevent offences, deferred prosecution agreements, and director disqualification proceedings.',
      },
      {
        heading: 'Police Station & Early Intervention',
        left: 'Providing expert legal advice from the moment of arrest or police contact to protect your rights and position.',
        right: 'The early stages of a criminal investigation are critical. We provide 24-hour police station attendance, advising clients during interviews under caution and ensuring that their rights under PACE are fully protected. Our early intervention service also includes advising clients who are aware they are under investigation, helping them to manage the process proactively and protect their position before charges are brought.',
      },
      {
        heading: 'Appeals & Post-Conviction',
        left: 'Challenging wrongful convictions and disproportionate sentences through the appellate courts.',
        right: 'If you have been wrongfully convicted or received a disproportionate sentence, our appeals team can help. We handle appeals to the Crown Court, Court of Appeal, and applications to the Criminal Cases Review Commission. Our team reviews trial proceedings and evidence with fresh eyes, identifies grounds for appeal, and presents compelling arguments to the appellate courts.',
      },
    ],
  },
  {
    name: 'CyberCrime Law',
    slug: 'cybercrime-law',
    href: '/expertise/cybercrime-law',
    sector: 'dispute-resolution',
    sectorName: 'Dispute Resolution & Litigation',
    tagline: 'Digital protection in an evolving threat landscape.',
    description: 'Cybersecurity legal framework and digital crime prevention with comprehensive cyber law expertise.',
    introLeft: 'Cybercrime is one of the fastest-growing threats to UK businesses and individuals. Our cybercrime law team provides specialist legal advice at the intersection of criminal law, data protection, and information security.',
    introRight: 'We advise businesses on cybersecurity legal obligations, represent victims of cyber attacks, and defend individuals accused of computer-related offences. Our team understands both the technical and legal dimensions of cybercrime, enabling us to provide advice that is practical, informed, and effective in this rapidly evolving area.',
    sections: [
      {
        heading: 'Cyber Incident Response',
        left: 'Providing immediate legal support when your business suffers a cyber attack or data breach.',
        right: 'When a cyber incident occurs, the legal response must be swift and coordinated. We provide immediate advice on regulatory notification obligations under UK GDPR and the NIS Regulations, evidence preservation, law enforcement engagement, and communications strategy. Our team works alongside your technical incident response team to manage the legal dimensions of the crisis, minimise regulatory exposure, and protect your organisation\'s interests.',
      },
      {
        heading: 'Cybersecurity Compliance',
        left: 'Building robust legal and regulatory compliance frameworks for cybersecurity obligations.',
        right: 'UK businesses face cybersecurity obligations under multiple legal frameworks including UK GDPR, the Network and Information Systems Regulations 2018, and sector-specific requirements from the FCA, Ofcom, and other regulators. We advise on compliance programme development, security policy drafting, supply chain cybersecurity requirements, and board-level governance of cyber risk. Our practical approach helps businesses achieve compliance without unnecessary complexity.',
      },
      {
        heading: 'Computer Misuse & Digital Offences',
        left: 'Defending individuals and businesses against allegations of computer misuse and related digital offences.',
        right: 'The Computer Misuse Act 1990 and related legislation create a range of criminal offences including unauthorised access to computer material, unauthorised modification of computer data, and making or supplying articles used in computer offences. We provide expert defence representation for individuals charged with these offences, including cases involving ethical hacking, security research, and allegations of insider threat.',
      },
      {
        heading: 'Digital Evidence & Forensics',
        left: 'Managing the legal dimensions of digital evidence gathering, preservation, and admissibility.',
        right: 'Digital evidence plays a central role in cybercrime cases and increasingly in all types of legal proceedings. We advise on evidence preservation requirements, forensic investigation protocols, chain of custody procedures, and the admissibility of digital evidence. Our team works with leading digital forensics experts to ensure that electronic evidence is gathered, analysed, and presented in a manner that meets legal standards and withstands scrutiny.',
      },
    ],
  },
  {
    name: 'Employment Law',
    slug: 'employment-law',
    href: '/expertise/employment-law',
    sector: 'regulatory-advisory',
    sectorName: 'Regulatory & Advisory',
    tagline: 'Balancing the needs of employers and employees.',
    description: 'Complete HR legal framework and employment law expertise to protect both employers and employees.',
    introLeft: 'Employment law affects every organisation and every working relationship. Our employment team provides comprehensive advice to both employers and senior employees, helping to manage the legal aspects of the employment relationship effectively.',
    introRight: 'We advise on the full employment lifecycle, from recruitment and onboarding through to termination and post-employment restrictions. Our practical, commercially-minded approach helps organisations manage their workforce legally and effectively, while protecting the rights and interests of individuals in the workplace.',
    sections: [
      {
        heading: 'Employment Contracts & Policies',
        left: 'Drafting comprehensive employment documentation that protects your business and complies with current legislation.',
        right: 'Every employment relationship should be built on clear, compliant documentation. We draft and review contracts of employment, director service agreements, consultant agreements, and employee handbooks. Our documents address key issues including restrictive covenants, confidentiality obligations, IP assignment, bonus and commission arrangements, and flexible working provisions. We ensure all documentation complies with current Employment Rights Act 1996 requirements and reflects best practice.',
      },
      {
        heading: 'Redundancy & Restructuring',
        left: 'Managing workforce restructuring and redundancy processes with legal precision and sensitivity.',
        right: 'Restructuring and redundancy processes must be managed carefully to comply with statutory requirements and minimise the risk of unfair dismissal and discrimination claims. We advise on consultation obligations including collective consultation requirements under TULRCA, selection criteria, alternative employment obligations, and settlement agreement negotiations. Our team provides step-by-step guidance through the process, ensuring legal compliance while maintaining workforce morale.',
      },
      {
        heading: 'Employment Tribunal Litigation',
        left: 'Representing employers and senior employees in Employment Tribunal and Employment Appeal Tribunal proceedings.',
        right: 'When employment disputes cannot be resolved through negotiation, we provide robust representation in Employment Tribunal proceedings. Our team handles claims for unfair dismissal, discrimination, whistleblowing, breach of contract, and unpaid wages. We manage cases from early conciliation through ACAS, disclosure, witness preparation, and trial advocacy. We also handle appeals to the Employment Appeal Tribunal and beyond.',
      },
      {
        heading: 'Workplace Discrimination & Equality',
        left: 'Advising on compliance with the Equality Act 2010 and managing discrimination risk in the workplace.',
        right: 'The Equality Act 2010 provides protection against discrimination on the grounds of age, disability, gender reassignment, marriage, pregnancy, race, religion, sex, and sexual orientation. We advise employers on equal opportunities policies, reasonable adjustments for disabled employees, harassment prevention, and the management of discrimination complaints. Our proactive approach helps organisations create inclusive workplaces and minimise the risk of costly tribunal claims.',
      },
    ],
  },
  {
    name: 'Taxation Law',
    slug: 'taxation-law',
    href: '/expertise/taxation-law',
    sector: 'regulatory-advisory',
    sectorName: 'Regulatory & Advisory',
    tagline: 'Strategic tax planning, practical compliance.',
    description: 'Comprehensive tax planning, compliance, and dispute resolution services for individuals and businesses.',
    introLeft: 'Tax law affects every business decision and personal financial arrangement. Our taxation team provides strategic advice that helps clients manage their tax obligations efficiently while ensuring full compliance with UK tax legislation.',
    introRight: 'We advise businesses and individuals on the full range of UK tax matters including corporation tax, income tax, VAT, capital gains tax, and inheritance tax. Our team combines technical tax expertise with practical commercial understanding, helping clients navigate the complexities of the UK tax system and achieve their financial objectives within the bounds of the law.',
    sections: [
      {
        heading: 'Corporate Tax Planning',
        left: 'Developing tax-efficient structures for business operations, transactions, and investments.',
        right: 'Effective tax planning is essential to business competitiveness. We advise on corporate tax structuring, group relief arrangements, R&D tax credits, Patent Box relief, and the tax implications of corporate transactions including mergers, acquisitions, and restructurings. Our team helps businesses optimise their tax position while maintaining full compliance with HMRC requirements and the General Anti-Abuse Rule.',
      },
      {
        heading: 'VAT & Indirect Tax',
        left: 'Managing VAT obligations across complex supply chains and ensuring accurate indirect tax compliance.',
        right: 'VAT compliance is a significant administrative and financial burden for UK businesses. We advise on VAT registration, return preparation, partial exemption calculations, and the VAT treatment of complex transactions. Our team also handles VAT on cross-border supplies post-Brexit, construction industry VAT issues, and VAT grouping arrangements. We represent clients in HMRC VAT assessments and appeals to the Tax Tribunal.',
      },
      {
        heading: 'Tax Investigations & Disputes',
        left: 'Representing taxpayers in HMRC investigations, enquiries, and appeals before the Tax Tribunals.',
        right: 'HMRC investigations can be stressful and financially significant. We represent individuals and businesses at all stages of HMRC enquiries, from initial information requests through to formal assessments, penalty proceedings, and Tax Tribunal appeals. Our team handles Code of Practice 8 and Code of Practice 9 investigations, voluntary disclosures, and the negotiation of settlements. We work to achieve the best possible outcome while managing costs and protecting our clients\' reputations.',
      },
      {
        heading: 'Personal Tax & Estate Planning',
        left: 'Advising individuals on income tax, capital gains tax, and inheritance tax planning strategies.',
        right: 'Effective personal tax planning requires a holistic approach that considers income, capital gains, and inheritance tax together. We advise on tax-efficient remuneration structures, share scheme participation, investment planning, residence and domicile issues, and inheritance tax mitigation. Our team also assists with the preparation and submission of complex personal tax returns, non-domicile taxation, and the tax aspects of divorce and family settlements.',
      },
    ],
  },
  {
    name: 'Constitutional Law',
    slug: 'constitutional-law',
    href: '/expertise/constitutional-law',
    sector: 'regulatory-advisory',
    sectorName: 'Regulatory & Advisory',
    tagline: 'Upholding fundamental rights and principles.',
    description: 'Constitutional rights protection and legal framework guidance for fundamental legal principles and governance.',
    introLeft: 'Constitutional law underpins the relationship between the state and the individual, and between different organs of government. Our constitutional law team advises on the fundamental principles that shape the UK\'s legal and political landscape.',
    introRight: 'We advise on human rights claims, judicial review proceedings, devolution issues, and the constitutional implications of legislative and executive action. Our team brings intellectual rigour and practical advocacy to this complex area of law, working to protect fundamental rights and ensure that public bodies act within their legal powers.',
    sections: [
      {
        heading: 'Judicial Review',
        left: 'Challenging unlawful decisions of public bodies through judicial review in the Administrative Court.',
        right: 'Judicial review is the primary mechanism for challenging the lawfulness of public body decisions. We advise and represent claimants and defendants in judicial review proceedings, covering grounds including illegality, irrationality, procedural unfairness, and legitimate expectation. Our team handles pre-action protocol correspondence, permission applications, substantive hearings, and appeals. We have experience in judicial reviews across multiple areas of public law including planning, immigration, education, and healthcare.',
      },
      {
        heading: 'Human Rights & Civil Liberties',
        left: 'Protecting fundamental rights under the Human Rights Act 1998 and the European Convention on Human Rights.',
        right: 'The Human Rights Act 1998 incorporates the European Convention on Human Rights into UK law, providing individuals with enforceable rights against public authorities. We advise on claims under Articles 2 through 14 of the Convention, including the right to life, prohibition of torture, right to liberty, right to a fair trial, right to private life, freedom of expression, and prohibition of discrimination. Our team represents individuals in domestic courts and, where necessary, advises on applications to the European Court of Human Rights.',
      },
      {
        heading: 'Public Law & Regulatory Challenge',
        left: 'Advising on the legal frameworks governing public authority decision-making and regulatory action.',
        right: 'Public authorities must exercise their powers in accordance with statute, common law principles, and the principles of good administration. We advise businesses and individuals affected by regulatory decisions, licensing determinations, procurement decisions, and enforcement actions. Our team has experience in challenging decisions of regulators including the FCA, CMA, Ofcom, and local authorities, and we advise on the interaction between regulatory frameworks and constitutional principles.',
      },
      {
        heading: 'Parliamentary & Legislative Affairs',
        left: 'Advising on the constitutional implications of proposed legislation and parliamentary processes.',
        right: 'We advise on the constitutional implications of primary and secondary legislation, devolution arrangements, and the interaction between domestic law and international obligations. Our team provides expert analysis of proposed legislation for businesses, trade associations, and public interest organisations, including advice on parliamentary scrutiny processes, impact assessments, and the lawfulness of delegated legislation.',
      },
    ],
  },
];

// --- TESTIMONIALS ---
export const testimonials = [
  {
    quote: 'Masl Legal provided outstanding support throughout a complex cross-border transaction. Their expertise in international trade compliance was invaluable, and they kept us informed at every stage of the process. I would highly recommend their services to any business operating internationally.',
    name: 'Kieran M.',
    title: 'CEO, import/export firm',
    initial: 'K',
  },
  {
    quote: 'The team handled our corporate restructuring with exceptional professionalism. Clear communication, strategic thinking, and genuine commitment to our business objectives. A first-class legal experience from start to finish.',
    name: 'Rebecca H.',
    title: 'CFO, technology company',
    initial: 'R',
  },
  {
    quote: 'Their AI law expertise is genuinely world-class. They helped us navigate a regulatory landscape that most firms don\'t yet understand. We felt completely confident throughout the entire process.',
    name: 'David L.',
    title: 'CTO, AI startup',
    initial: 'D',
  },
  {
    quote: 'Efficient, knowledgeable, and always available. Our IP portfolio is in safe hands with Masl Legal. They identified risks we hadn\'t even considered and developed a comprehensive protection strategy.',
    name: 'Sarah T.',
    title: 'Founder, consumer brand',
    initial: 'S',
  },
  {
    quote: 'We engaged Masl Legal for a complex arbitration matter. Their strategic approach and deep understanding of international arbitration rules led to an excellent outcome for our company.',
    name: 'James W.',
    title: 'Director, manufacturing firm',
    initial: 'J',
  },
  {
    quote: 'The employment law team provided clear, practical advice during a difficult restructuring. They balanced legal rigour with genuine empathy for all parties involved. Exceptional service.',
    name: 'Priya K.',
    title: 'HR Director, financial services',
    initial: 'P',
  },
];

// --- NEWS ARTICLES ---
export const newsArticles = [
  {
    title: 'Navigating AI Regulation: What UK Businesses Need to Know in 2026',
    slug: 'ai-regulation-uk-businesses-2026',
    date: '15 Feb 2026',
    tag: 'AI Law',
    readingTime: '5 min read',
    excerpt: 'The rapid advancement of artificial intelligence is prompting governments worldwide to develop regulatory frameworks. UK businesses must stay ahead of evolving compliance requirements to avoid costly pitfalls and position themselves for growth in the age of AI.',
    content: `The artificial intelligence landscape is evolving at an unprecedented pace, and with it, the regulatory frameworks that govern how businesses develop, deploy, and use AI systems. For UK businesses, understanding the current regulatory environment is not just a matter of compliance — it is a strategic imperative.

The UK government has adopted what it describes as a "pro-innovation" approach to AI regulation. Rather than introducing a single, comprehensive AI Act, the UK has opted for a sector-specific framework, empowering existing regulators such as the FCA, Ofcom, the CMA, and the ICO to apply a set of cross-cutting principles within their respective domains. These principles include safety, transparency, fairness, accountability, and contestability.

However, UK businesses that operate in or supply services to the European Union must also contend with the EU AI Act, which entered into force in August 2024 and is being implemented in phases through to 2027. The EU AI Act adopts a risk-based classification system, categorising AI systems as minimal risk, limited risk, high risk, or unacceptable risk. High-risk AI systems — which include those used in employment, credit scoring, law enforcement, and critical infrastructure — face the most stringent requirements including conformity assessments, quality management systems, and ongoing monitoring obligations.

For UK businesses supplying AI systems into the EU market, compliance with the EU AI Act is mandatory regardless of where the business is based. This extraterritorial reach means that many UK businesses will need to comply with both the UK\'s sectoral approach and the EU\'s comprehensive framework simultaneously.

Key compliance steps UK businesses should take now include conducting an AI inventory to identify all AI systems in use and under development; carrying out risk assessments against both UK sectoral requirements and the EU AI Act classifications; implementing appropriate governance frameworks including documentation, human oversight mechanisms, and transparency measures; and training staff on AI compliance obligations.

Data governance remains a critical component of AI compliance. The use of personal data in AI training and deployment must comply with UK GDPR, and the ICO has published detailed guidance on AI and data protection that businesses should follow. Additionally, the ongoing debate around the use of copyrighted material in AI training data introduces further legal considerations that businesses must navigate carefully.

At Masl Legal, our AI Law and Governance team provides comprehensive advice on all aspects of AI regulation. We help businesses understand their obligations, develop compliance frameworks, and position themselves to harness AI responsibly and competitively. Whether you are developing AI systems, deploying third-party AI tools, or simply trying to understand how these regulations affect your operations, we are here to help.

The regulatory landscape will continue to evolve. Businesses that invest in understanding and compliance now will be best positioned to innovate confidently in the years ahead.`,
  },
  {
    title: 'Cross-Border Trade Compliance: Key Updates for UK Businesses Post-Brexit',
    slug: 'cross-border-trade-compliance-post-brexit',
    date: '02 Feb 2026',
    tag: 'International Trade',
    readingTime: '5 min read',
    excerpt: 'As trade relationships continue to evolve post-Brexit, businesses engaged in international commerce face new compliance challenges. Understanding the latest customs regulations and trade agreements is essential for maintaining seamless operations.',
    content: `The post-Brexit trade landscape continues to present both challenges and opportunities for UK businesses engaged in international commerce. As the UK establishes its independent trade policy and the full implications of the UK-EU Trade and Cooperation Agreement become clearer, businesses must stay informed of the latest developments to maintain compliance and competitive advantage.

The UK-EU Trade and Cooperation Agreement, which took effect on 1 January 2021, provides for zero-tariff, zero-quota trade in goods between the UK and the EU, provided those goods meet the relevant rules of origin. However, the practical compliance requirements associated with these rules remain a significant burden for many businesses. Rules of origin determinations require detailed supply chain analysis, and the documentation requirements — including statements of origin and supplier declarations — demand robust internal processes.

One area of particular complexity is the diagonal cumulation provisions under the TCA. These provisions allow UK manufacturers to count EU-origin materials as UK-origin when determining whether goods qualify for preferential treatment. However, the practical application of these rules requires careful documentation and a thorough understanding of product-specific rules across different tariff headings.

The introduction of the UK\'s Border Target Operating Model has also changed the compliance landscape for importers. The phased introduction of sanitary and phytosanitary checks, safety and security declarations, and customs controls on EU imports represents a significant shift from the grace period arrangements that previously applied. Businesses importing goods from the EU must ensure they have the necessary systems, documentation, and authorisations in place.

Beyond the EU, the UK continues to expand its network of free trade agreements. Agreements with Australia, New Zealand, and the CPTPP accession offer new market access opportunities, but each comes with its own rules of origin requirements, regulatory provisions, and compliance obligations. UK businesses must evaluate these agreements against their specific supply chains to determine whether preferential treatment is available and commercially worthwhile.

Sanctions compliance remains another critical area. The UK has maintained an independent sanctions regime since Brexit, and the pace of sanctions designations has been significant. Businesses must conduct thorough screening of counterparties against the UK sanctions list and ensure they have adequate compliance programmes in place. The penalties for sanctions violations can be severe, including criminal prosecution.

At Masl Legal, our International Trade Law team advises businesses on all aspects of cross-border trade compliance. We help clients navigate rules of origin, customs procedures, export controls, sanctions compliance, and the practical implications of new trade agreements. Our advice is practical, commercially focused, and designed to help businesses trade internationally with confidence.

The post-Brexit trade environment will continue to evolve as new agreements are negotiated and existing arrangements are refined. Businesses that maintain robust compliance frameworks and stay ahead of regulatory changes will be best positioned to capitalise on the opportunities that international trade offers.`,
  },
  {
    title: 'Cybercrime Trends and Legal Protections for Digital Businesses',
    slug: 'cybercrime-trends-legal-protections',
    date: '20 Jan 2026',
    tag: 'CyberCrime',
    readingTime: '5 min read',
    excerpt: 'With the rise in sophisticated cyber attacks targeting UK businesses, understanding your legal obligations and protections has never been more important. We examine the key trends and what your business should be doing to stay protected.',
    content: `Cybercrime continues to escalate in both scale and sophistication, posing an existential threat to businesses of all sizes across the United Kingdom. The National Cyber Security Centre has reported a significant increase in ransomware attacks, business email compromise, and supply chain compromises targeting UK organisations. Understanding the legal landscape surrounding cybercrime is essential for every digital business.

The primary criminal legislation governing cybercrime in the UK is the Computer Misuse Act 1990, which creates offences for unauthorised access to computer material, unauthorised access with intent to commit further offences, and unauthorised acts with intent to impair computer operation. However, the Act was drafted in a pre-internet era, and while subsequent amendments have expanded its scope, there is ongoing debate about whether it adequately addresses the modern threat landscape.

Beyond criminal law, businesses have significant regulatory obligations in relation to cybersecurity. UK GDPR requires organisations to implement appropriate technical and organisational measures to ensure the security of personal data. The Network and Information Systems Regulations 2018 impose specific cybersecurity obligations on operators of essential services and relevant digital service providers. Sector-specific regulators including the FCA, PRA, and Ofcom have also introduced detailed cybersecurity requirements for regulated entities.

When a cyber incident occurs, the legal response must be swift and coordinated. Under UK GDPR, certain personal data breaches must be reported to the ICO within 72 hours of becoming aware of the breach, and affected individuals must be notified without undue delay where the breach poses a high risk to their rights and freedoms. The NIS Regulations impose similar notification obligations on in-scope organisations. Failure to comply with these reporting requirements can result in significant fines.

Businesses should also be aware of their options for civil recovery following a cyber attack. Where the attacker can be identified, civil claims for damages may be pursued. Businesses may also have claims against third-party suppliers or service providers whose security failures contributed to the breach. Insurance coverage under cyber insurance policies may provide additional recovery options, but policy terms must be carefully reviewed to ensure adequate coverage.

The law enforcement response to cybercrime has also evolved significantly. The National Crime Agency\'s National Cyber Crime Unit, in coordination with regional cyber crime units and Action Fraud, provides a more coordinated response to cyber offences. Businesses should report cyber crimes promptly to assist law enforcement and to demonstrate compliance with their regulatory obligations.

At Masl Legal, our CyberCrime Law team provides comprehensive legal support for businesses navigating the cyber threat landscape. We advise on cybersecurity compliance, incident response, regulatory notifications, civil recovery, and criminal defence for those accused of computer-related offences. Our practical, technically informed approach helps businesses protect themselves and respond effectively when incidents occur.

Prevention remains the best strategy. Businesses should invest in robust cybersecurity measures, conduct regular security assessments, maintain incident response plans, and ensure all staff are trained in cyber awareness. The legal and financial consequences of a cyber breach can be devastating, but with proper preparation, the risks can be significantly reduced.`,
  },
  {
    title: 'The Rise of E-Commerce Disputes: How to Protect Your Online Business',
    slug: 'e-commerce-disputes-protect-online-business',
    date: '08 Jan 2026',
    tag: 'E-Commerce',
    readingTime: '5 min read',
    excerpt: 'As digital commerce grows, so do the legal disputes that come with it. From consumer complaints to platform liability, online businesses face a unique set of legal challenges that require specialist expertise.',
    content: `The growth of e-commerce in the United Kingdom continues to accelerate, with online retail sales now accounting for a significant proportion of total retail spending. However, this growth has been accompanied by a corresponding increase in legal disputes, ranging from consumer complaints and chargebacks to complex multi-party platform liability claims. Online businesses must understand the legal risks they face and take proactive steps to protect themselves.

Consumer rights in the e-commerce context are primarily governed by the Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. These regulations give online consumers significant rights including a 14-day cooling-off period for most purchases, the right to clear pre-contractual information, and remedies for goods that are not of satisfactory quality, fit for purpose, or as described. Businesses that fail to comply with these requirements face enforcement action from Trading Standards and the Competition and Markets Authority.

One of the most significant sources of e-commerce disputes is the chargeback process. When consumers dispute transactions with their card issuers, merchants can face substantial financial losses, particularly if they do not maintain adequate records of transactions, delivery confirmation, and customer communications. Implementing robust transaction documentation, clear refund policies, and responsive customer service processes can significantly reduce chargeback rates and improve outcomes in dispute resolution.

Platform liability is an increasingly complex area of e-commerce law. Online marketplaces must navigate their obligations under the Online Safety Act, which imposes duties on platforms to protect users from illegal content and activity. Marketplaces must also manage their liability for defective products sold by third-party sellers, an area where the law is evolving and the allocation of responsibility between platforms and sellers remains contentious.

Cross-border e-commerce introduces additional legal complexity. UK businesses selling to EU consumers must comply with the EU Consumer Rights Directive, the EU Digital Services Act, and country-specific consumer protection requirements. Post-Brexit, the absence of mutual recognition arrangements for e-commerce regulation means that UK businesses may need to comply with multiple regulatory regimes simultaneously.

Intellectual property infringement is another significant risk for e-commerce businesses. Trade mark infringement through counterfeit goods, copyright infringement through unauthorised use of product images and descriptions, and passing off through misleading product listings are all common issues. Businesses should implement robust IP monitoring systems and be prepared to take swift enforcement action when infringement is identified.

At Masl Legal, our E-Commerce Law team advises online businesses on the full range of legal challenges they face. We help businesses structure their terms and conditions, manage consumer disputes, protect their intellectual property, and navigate platform regulatory requirements. Our advice is practical, commercially focused, and designed to support sustainable growth in the digital economy.

The e-commerce landscape will continue to evolve, and with it the legal framework that governs it. Businesses that invest in robust legal compliance and dispute prevention strategies will be best positioned to succeed in this dynamic and competitive market.`,
  },
  {
    title: 'Employment Law Changes 2026: What Employers Must Prepare For',
    slug: 'employment-law-changes-2026',
    date: '18 Dec 2025',
    tag: 'Employment',
    readingTime: '5 min read',
    excerpt: 'Significant changes to UK employment legislation are set to take effect in 2026. From flexible working rights to new redundancy consultation requirements, employers must act now to ensure compliance.',
    content: `The UK employment law landscape is undergoing significant reform, with a number of important legislative changes taking effect in 2026. Employers must act now to understand these changes, update their policies and procedures, and train their management teams to ensure compliance. Failure to prepare could result in costly Employment Tribunal claims and reputational damage.

The Employment Relations (Flexible Working) Act has significantly strengthened the right to request flexible working. Employees now have the right to make a flexible working request from day one of employment, rather than after 26 weeks of continuous service. Employers must consult with the employee before refusing a request and must respond within two months. The number of requests an employee can make has been increased to two per year, and the requirement for employees to explain the impact of their proposed arrangement on the employer has been removed.

The Protection from Redundancy (Pregnancy and Family Leave) Act extends redundancy protection for employees on maternity leave, adoption leave, and shared parental leave. Protected employees must be offered suitable alternative employment where available, and this protection now extends for a period of 18 months after the employee returns to work. Employers must review their redundancy selection processes to ensure compliance with these enhanced protections.

Significant changes to holiday pay calculations and the treatment of irregular hours and part-year workers have also been introduced. Following the Supreme Court decision in Harpur Trust v Brazel, the government has introduced a system of rolled-up holiday pay for irregular hours and part-year workers, allowing employers to include a 12.07% uplift in hourly pay rather than providing paid time off. Employers using this method must clearly identify the holiday pay element in pay statements and ensure workers are not disadvantaged by the arrangement.

The Worker Protection (Amendment of Equality Act 2010) Act has introduced a new positive duty on employers to take reasonable steps to prevent sexual harassment in the workplace. This duty is proactive rather than reactive, meaning employers cannot simply wait for complaints to arise. Employers must conduct risk assessments, implement preventive measures including staff training and clear reporting procedures, and review their policies regularly. Employment Tribunals can increase compensation by up to 25% where an employer is found to have breached this duty.

Changes to fire and re-hire practices have also been introduced, with a new statutory code of practice that Employment Tribunals must take into account when considering relevant claims. Employers contemplating changes to terms and conditions of employment must follow a fair consultation process and can face increased compensation awards if they dismiss and re-engage employees without adequate justification or proper procedure.

At Masl Legal, our Employment Law team advises employers and senior employees on all aspects of these legislative changes. We help businesses update their policies and procedures, train their management teams, and ensure compliance with the new requirements. Our practical, commercially focused advice helps employers navigate these changes with confidence while maintaining positive employee relations.

Employers who take early action to understand and implement these changes will be in the strongest position to manage their workforce effectively and minimise the risk of legal claims. We recommend a comprehensive review of employment contracts, handbooks, and management procedures to ensure full compliance with the new legislative framework.`,
  },
];

// --- HELPER FUNCTIONS ---

export function getExpertiseBySlug(slug) {
  return expertiseAreas.find((e) => e.slug === slug);
}

export function getExpertiseBySector(sectorSlug) {
  return expertiseAreas.filter((e) => e.sector === sectorSlug);
}

export function getSectorBySlug(slug) {
  return sectors.find((s) => s.slug === slug);
}

export function getArticleBySlug(slug) {
  return newsArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(tags, excludeSlug, limit = 2) {
  const tagArray = Array.isArray(tags) ? tags : [tags];
  return newsArticles
    .filter((a) => a.slug !== excludeSlug && tagArray.some((t) => a.tag.toLowerCase().includes(t.toLowerCase())))
    .slice(0, limit);
}

export function getRelatedTestimonials(sectorSlug, limit = 2) {
  const mapping = {
    'business-commercial': [0, 1],
    'international-trade': [2, 3],
    'dispute-resolution': [4, 1],
    'regulatory-advisory': [5, 0],
  };
  const indices = mapping[sectorSlug] || [0, 1];
  return indices.slice(0, limit).map((i) => testimonials[i]);
}
