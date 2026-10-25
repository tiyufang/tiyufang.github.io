/*
 * 主页内容配置
 * 后期更新时，通常只需要修改这个文件，不必改 index.html 或 styles.css。
 * 数组中的每一项会自动渲染到页面对应位置。
 */
window.SITE_DATA = {
  bio: "博士毕业于山东大学控制科学与工程学院电子信息专业，导师为张伟教授（教育部长江学者，副院长）和宋然教授（国家“万人计划”青年拔尖人才）。目前任职于济南大学模式识别与智能系统研究所（所长：李金屏教授，泰山产业领军人才），长期从事工业场景下的智能感知与机器人研究。主要关注小样本工业缺陷检测、视觉基础模型、机器人感知与控制，以及相关技术在能源、电力等场景中的工程应用。",

  email: "ise_fangty@ujn.edu.cn",

  news: [
    {
      date: "2026.10",
      tag: "任职",
      text: "加入济南大学信息科学与工程学院，任青年英才岗教师。"
    },
    {
      date: "2026.08",
      tag: "论文",
      text: "Cross-Modal Guidance Learning for Zero-Shot Industrial Anomaly Detection 被 IEEE TASE录用。"
    },
    {
      date: "2026.02",
      tag: "论文",
      text: "RDPrompter 被 IEEE TII 录用。"
    },

    {
      date: "2025.03",
      tag: "项目",
      text: "宇树 Qmini 低成本双足机器人软硬件方案正式开源。",
      link: "https://github.com/unitreerobotics/Qmini",
      linkText: "项目地址"
    }
  ],

  research: [
    {
      title: "工业智能",
      description: "面向表面缺陷、设备异常与安全巡检，研究少样本、零样本与持续学习方法，推动视觉基础模型适应复杂工业现场。"
    },
    {
      title: "计算机视觉",
      description: "聚焦图像分割、目标检测、多模态感知与深度估计，研究弱监督学习、提示学习及不确定性建模。"
    },
    {
      title: "具身智能",
      description: "围绕双足、四足与轮式机器人，研究视觉导航、环境感知和运动控制，构建面向真实任务的软硬件系统。"
    }
  ],

  publications: [
    {
      title: "RDPrompter: Reference-Defect Prompt Learning for Few-shot Defect Segmentation Based on Visual Foundation Model",
      authors: "<strong>Tiyu Fang</strong>, Lin Zhang, Ran Song, Xiaolei Li, Zhiyuan Wei, Wei Zhang",
      venue: "IEEE Transactions on Industrial Informatics",
      year: "2026",
      tag: "SCI Q1"
    },
    {
      title: "Cross-Modal Guidance Learning for Zero-Shot Industrial Anomaly Detection",
      authors: "<strong>Tiyu Fang</strong>, Lin Zhang, Ran Song, Mingxin Zhang, Xiaolei Li, Wei Zhang",
      venue: "IEEE Transactions on Automation Science and Engineering",
      year: "2026",
      tag: "SCI Q1 "
    },
    {
      title: "Human-Guided Data Augmentation via Diffusion Model for Surface Defect Recognition Under Limited Data",
      authors: "<strong>Tiyu Fang</strong>, Mingxin Zhang, Ran Song, Xiaolei Li, Zhiyuan Wei, Wei Zhang",
      venue: "IEEE Transactions on Instrumentation and Measurement",
      year: "2025",
      tag: "SCI Q1"
    },
    {
      title: "GPESNet: Global Prompt-Embedded Segmentation Network for Weld Defect Detection",
      authors: "Yongqing Ye, <strong>Tiyu Fang</strong>, Yue Lu, Yang Li, Zhenhua Li, Ran Song",
      venue: "IEEE ICMA",
      year: "2025",
      tag: "EI"
    },
    {
      title: "UAFer: A Unified Model for Class-Agnostic Binary Segmentation With Uncertainty-Aware Feature Reassembly",
      authors: "Zihao Dong, Zizhen Liu, Runmin Cong, <strong>Tiyu Fang</strong>, Xiuli Shao, Sam Kwong",
      venue: "IEEE Transactions on Circuits and Systems for Video Technology",
      year: "2024",
      tag: "SCI Q1"
    },
    {
      title: "Weakly Supervised Fine-grained Semantic Segmentation via Spatial Correlation-guided Learning",
      authors: "Zihao Dong, <strong>Tiyu Fang</strong>, Jinping Li, Xiuli Shao",
      venue: "Computer Vision and Image Understanding",
      year: "2023",
      tag: "CCF B · 共一"
    },
    {
      title: "Depth Removal Distillation for RGB-D Semantic Segmentation",
      authors: "<strong>Tiyu Fang</strong>, Zhen Liang, Zihao Dong, Jinping Li",
      venue: "IEEE ICASSP",
      year: "2022",
      tag: "CCF B"
    },
    {
      title: "Self-supervised Multi-view Clustering for Unsupervised Image Segmentation",
      authors: "<strong>Tiyu Fang</strong>, Zhen Liang, Xiuli Shao, Zihao Dong, Jinping Li",
      venue: "ICANN",
      year: "2021",
      tag: "CCF C · Oral"
    },
    {
      title: "Lightweight Boundary Refinement Module Based on Point Supervision for Semantic Segmentation",
      authors: "Zihao Dong, Jinping Li, <strong>Tiyu Fang</strong>, Xiuli Shao",
      venue: "Image and Vision Computing",
      year: "2021",
      tag: "SCI"
    },
    {
      title: "Positioning and Pressing Elevator Button by Binocular Vision and Robot Manipulator",
      authors: "<strong>Tiyu Fang</strong>, Huiwu Chen, Jianjie Shi, Jinping Li",
      venue: "IEEE SPAC",
      year: "2018",
      tag: "Best Paper"
    }
  ],

  projects: [
    {
      title: "宇树 Qmini 双足机器人研发",
      partner: "宇树科技",
      period: "2025.03 — 至今",
      description: "作为项目主要负责人，参与软硬件设计与项目管理，搭建底层驱动框架和运动控制算法框架。",
      result: "开源方案获得央视、新华网等媒体报道，软硬件仓库累计获 700+ Stars。",
      link: "https://github.com/unitreerobotics/Qmini",
      linkText: "查看开源项目 ↗"
    },
    {
      title: "面向特种环境的新型智能巡检装备及系统研发",
      partner: "山东能源集团",
      period: "2023.09 — 2025.12",
      description: "研发复眼结构超远程智能成像系统与特种巡检四足机器人平台，负责成像设备软硬件、算法及机器人视觉导航模块。",
      result: "成果评价达到国际先进水平，已在多个煤矿与选煤厂落地。"
    },
    {
      title: "基于机器视觉的电力安全隐患检测系统",
      partner: "山东信通电子",
      period: "2016.09 — 2022.06",
      description: "围绕输电线路与变电站场景研发近 20 项视觉检测功能；硕士阶段起负责项目技术管理、系统开发与运维。",
      result: "覆盖山东省 17 地市及多个省份，获教育部科学技术进步奖二等奖。"
    },
    {
      title: "矿用胶带输送机安全运行检测系统",
      partner: "山东能源集团",
      period: "2022.06 — 2023.09",
      description: "负责 AI 视频分析系统开发、算法设计和维护，实现超温、皮带撕裂、异物侵入与危险区域闯入检测。",
      result: "已应用于山东能源集团新泰翟镇煤矿。"
    },
    {
      title: "架空输电线路安全分析与预警技术研究与应用",
      partner: "国网山东省电力公司",
      period: "2023.09 — 2024.06",
      description: "融合视觉感知、结构分析与多传感数据，开展线路形变监测、动态响应分析及地质风险识别。",
      result: "已应用于国网山东省莱芜供电公司。"
    },
    {
      title: "变电设备安全预警技术研究与应用",
      partner: "国网山东省电力公司",
      period: "2023.09 — 2024.06",
      description: "融合可见光、红外、高光谱和音频，研发变压器漏油检测、指针仪表读数及异常声音识别模型。",
      result: "系统已部署至国网山东省聊城供电公司市区变电站。"
    }
  ],

  honorTimeline: [
    { year: "2025", items: ["纪德法奖学金"] },
    { year: "2022", items: ["宋健奖学金（学校最高奖，建院首位硕士获得者）"] },
    { year: "2021", items: ["山东省大学生人工智能大赛一等奖"] },
    {
      year: "2020",
      items: [
        "“创青春”全国大学生创业大赛山东赛区金奖",
        "全国大学生科技创新大赛山东省三等奖"
      ]
    },
    { year: "2019–2020", items: ["“华为杯”中国研究生数学建模竞赛全国三等奖两项"] },
    {
      year: "2019",
      items: [
        "山东省优秀毕业生",
        "全国大学生金融科技创新大赛山东赛区三等奖"
      ]
    },
    {
      year: "2018",
      items: [
        "主持国家级大学生创新创业计划一项并结题",
        "微软创新杯全球学生科技大赛中国区总决赛三等奖",
        "全国大学生互联网软件设计大赛（发现杯）区域赛二等奖",
        "美国大学生数学建模竞赛 S 奖"
      ]
    },
    { year: "2017–2018", items: ["山东省大学生软件设计大赛二等奖、三等奖各一项"] },
    {
      year: "2017",
      items: [
        "国家励志奖学金",
        "全国大学生计算机系统能力培养大赛（龙芯杯）全国总决赛优胜奖",
        "全国大学生数学建模竞赛山东赛区一等奖"
      ]
    },
    {
      year: "在校期间",
      items: [
        "本科、硕士阶段获得国家奖学金两项",
        "本科至硕士阶段连续获得校一等奖学金",
        "校优秀学生干部、优秀团员及校科技立项等奖项十余项"
      ]
    }
  ]
};
