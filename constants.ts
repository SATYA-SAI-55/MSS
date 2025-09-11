
import { Page, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', page: Page.Home },
  { name: 'About', page: Page.About },
  { name: 'Workflow', page: Page.Workflow },
  { name: 'Outcomes', page: Page.Outcomes },
  { name: 'Extensions', page: Page.Extensions },
];

export const PAPER_INFO = {
  title: 'Salient Object Detection in Optical Remote Sensing Images Driven by Transformer',
  authors: 'Gongyang Li, Zhen Bai, Zhi Liu, Xinpeng Zhang, and Haibin Ling',
  publication: 'IEEE TRANSACTIONS ON IMAGE PROCESSING, VOL. 32, 2023',
  abstract: 'Existing methods for Salient Object Detection in Optical Remote Sensing Images (ORSI-SOD) mainly adopt Convolutional Neural Networks (CNNs). Since CNNs can only extract features within certain receptive fields, most ORSI-SOD methods generally follow the local-to-contextual paradigm. In this paper, we propose a novel Global Extraction Local Exploration Network (GeleNet) for ORSI-SOD following the global-to-local paradigm. Specifically, GeleNet first adopts a transformer backbone to generate four-level feature embeddings with global long-range dependencies. Then, GeleNet employs a Direction-aware Shuffle Weighted Spatial Attention Module (D-SWSAM) and a Knowledge Transfer Module (KTM) to enhance local and cross-level interactions. Extensive experiments on three public datasets demonstrate that the proposed GeleNet outperforms relevant state-of-the-art methods.'
};

export const OUTCOMES_DATA = {
    table1: {
        caption: 'Quantitative Comparisons on EORSSD and ORSSD Datasets. Ours-PVT shows top performance.',
        headers: ['Methods', 'Type', 'Sa (%) ↑', 'Fmax (%) ↑', 'Emax (%) ↑', 'M ↓'],
        rows: [
            { method: 'R3Net18', type: 'CN', sa: 0.8184, fmax: 0.7498, emax: 0.9483, m: 0.0171 },
            { method: 'PoolNet19', type: 'CN', sa: 0.8207, fmax: 0.7545, emax: 0.9292, m: 0.0210 },
            { method: 'VST21', type: 'TN', sa: 0.9208, fmax: 0.8716, emax: 0.9743, m: 0.0067 },
            { method: 'ACCONet22', type: 'CO', sa: 0.9290, fmax: 0.8837, emax: 0.9727, m: 0.0074 },
            { method: 'CorrNet22', type: 'CO', sa: 0.9289, fmax: 0.8778, emax: 0.9696, m: 0.0083 },
            { method: 'Ours-VGG', type: 'CO', sa: 0.9241, fmax: 0.8721, emax: 0.9723, m: 0.0080 },
            { method: 'Ours-Res', type: 'CO', sa: 0.9271, fmax: 0.8723, emax: 0.9692, m: 0.0071 },
            { method: 'Ours-SwinT', type: 'TO', sa: 0.9259, fmax: 0.8774, emax: 0.9794, m: 0.0055 },
            { method: 'Ours-PVT', type: 'TO', sa: 0.9376, fmax: 0.8923, emax: 0.9828, m: 0.0064, highlight: true },
        ]
    }
};