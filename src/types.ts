/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SystemProduct {
  id: string;
  category: 'business' | 'school' | 'institution' | 'custom';
  title: string;
  tagline: string;
  shortDescription: string;
  features: string[];
  capabilities: { label: string; desc: string }[];
  impactMetric: string;
  impactLabel: string;
}

export interface ProblemSolution {
  title: string;
  segment: string;
  description: string;
  painPoints: string[];
  systemsEngineered: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    description: string;
    points: { [key: string]: number }; // category scoring
  }[];
}

export interface EstimatorFeature {
  id: string;
  category: string;
  label: string;
  description: string;
  baseCost: number;
  timeWeeks: number;
}
