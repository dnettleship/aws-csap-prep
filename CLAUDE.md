# CLAUDE.md — SAP-C02 Revision Site

## Purpose
This is a static HTML revision site for the AWS Solutions Architect Professional (SAP-C02) exam. All pages use `site.css` with a dark-theme design system. No build step — pure HTML/CSS/JS.

---

## Generating Targeted Practice from Exam Results

When the user pastes or shares a results JSON file (downloaded from any mock exam), use the data to generate a targeted practice session focused on weak areas.

### Results JSON format
```json
{
  "exam": "Mock Exam 1",
  "date": "2026-04-17",
  "score": 60,
  "domains": {
    "1": { "name": "Org Complexity",        "correct": 1, "total": 3, "weakQuestions": ["q5","q7"] },
    "2": { "name": "New Solutions",         "correct": 2, "total": 3, "weakQuestions": ["q6"] },
    "3": { "name": "Continuous Improvement","correct": 1, "total": 2, "weakQuestions": ["q4"] },
    "4": { "name": "Migration",             "correct": 2, "total": 2, "weakQuestions": [] }
  },
  "weakAreas": ["Org Complexity", "Continuous Improvement"]
}
```

### How to interpret
- `weakAreas` lists domains where the score was < 60%. These need the most new questions.
- `domains[n].weakQuestions` lists the specific question IDs answered incorrectly — avoid repeating those exact questions.
- Domains not in `weakAreas` (score ≥ 60%) still deserve 1–2 questions to maintain retention.

### How to create a targeted mock exam

1. **Determine question allocation** — weight toward weak domains:
   - Weak domain (< 60%): 2–3 questions per domain
   - Decent domain (60–79%): 1–2 questions per domain
   - Strong domain (≥ 80%): 1 question per domain
   - Total: aim for 10 questions

2. **Choose topics** — pick topics from weak domains that weren't covered in the source exam. Use the domain topic lists below as a guide.

3. **Write the exam** — use the HTML template below (copy from any existing `mock-exam-0N.html`). The `EXAM_NAME` constant should reflect the focus, e.g. `"Targeted Practice — Org Complexity & Cost"`.

4. **Save the file** — place the new exam in `practice/mock-exams/` and link it from `index.html` under the Practice Exams section.

5. **Save results** — users save downloaded JSON files in `practice/completed-exams/` for tracking progress over time.

---

## Domain Topic Coverage Guide

Use this to avoid repeating topics and to pick focused questions for weak areas.

### Domain 1 — Organizational Complexity (26%)
Key topics: AWS Organizations, SCPs, Control Tower, delegated admin, Service Control Policies, RAM, TGW inter-account, Security Hub centralization, GuardDuty centralization, AWS Config organizational rules, CloudTrail org trail, StackSets, permission boundaries, Identity Center, ABAC.

### Domain 2 — New Solutions (29%)
Key topics: Aurora (Global DB, Serverless v2, Multi-Master), DynamoDB (hot partitions, GSI, DAX, Global Tables), ElastiCache (Redis vs Memcached, caching strategies), Lambda (concurrency, Destinations, event source mapping), ECS/EKS/Fargate (launch types, task roles, scaling), API Gateway, Cognito (User Pools vs Identity Pools), PrivateLink, ALB/NLB, SQS/SNS/EventBridge patterns, Step Functions, Neptune, OpenSearch, Kinesis (Data Streams, Firehose), ACM, WAF.

### Domain 3 — Continuous Improvement (25%)
Key topics: Cost optimization (Savings Plans, Reserved Instances, Spot, Compute Optimizer, right-sizing), CloudWatch (metric filters, alarms, Logs Insights, Container Insights, anomaly detection), X-Ray tracing, AWS Config compliance, Trusted Advisor, Cost Explorer, AWS Budgets and Budget Actions, Cost Allocation Tags, S3 storage class optimization, Athena query optimization.

### Domain 4 — Migration & Modernization (20%)
Key topics: 7 Rs (Retire, Retain, Rehost, Replatform, Repurchase, Refactor, Relocate), MGN (Application Migration Service), DMS + SCT (schema conversion, CDC), DataSync, Snow family (Snowball Edge, Snowmobile), Strangler Fig pattern, App2Container, Database Migration (Oracle→Aurora, SQL Server→RDS), EFS migration, Backup centralization with AWS Backup.

---

## File Structure
```
index.html                          — Home page
site.css                            — Shared stylesheet (all pages link to this)
CLAUDE.md                           — This file
domains/
  01-organizational-complexity/
  02-new-solutions/
  03-migration-modernization/
  04-cost-performance/
services/
  networking/    transit-gateway, direct-connect, route53, cloudfront
  security/      iam-organizations, kms
  databases/     aurora, dynamodb, elasticache
  compute/       lambda, ecs-eks
  messaging/     sqs-sns-eventbridge
  monitoring/    cloudwatch
architecture-patterns/
  disaster-recovery, high-availability
cheatsheets/
  exam-traps, storage-class-decision-tree, vpc-connectivity-options
practice/
  mock-exams/    mock-exam-01 through mock-exam-05 (10 questions each)
  completed-exams/  user saves downloaded results JSON files here
```

## CSS Conventions
- All pages use `site.css` — do not add inline styles for layout (only exam-specific overrides are inline)
- Depth-1 pages (e.g. `cheatsheets/`): `href="../site.css"`
- Depth-2 pages (e.g. `services/networking/`): `href="../../site.css"`
- Tag classes for domain badges: `.tag-d1`, `.tag-d2`, `.tag-d3`, `.tag-d4`
- Tag classes for service cards: `.tag-net`, `.tag-sec`, `.tag-db`, `.tag-compute`, `.tag-int`, `.tag-monitor`, `.tag-cheat`, `.tag-pattern`

## Mock Exam JS Pattern
All mock exams share the same JS structure. To create a new exam:
1. Copy `mock-exam-05.html` as a starting point
2. Update `EXAM_NAME`, the `<title>`, breadcrumb, and subtitle
3. Replace the `QUESTIONS` array (10 items, each with `id`, `domain` 1–4, `text`, `options` A–D)
4. Replace the `ANSWERS` object (each entry: `correct` letter, `explanation`, `link` to relevant notes page)
5. Each question needs a `domain` number so the domain breakdown report works correctly
