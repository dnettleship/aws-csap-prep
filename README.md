# AWS Certified Solutions Architect Professional (SAP-C02)

Revision material for the SAP-C02 exam.

## Exam Overview
- **165 minutes**, 75 questions (multiple choice + multiple response)
- Passing score: 750/1000
- [Official exam guide](https://d1.awsstatic.com/training-certification/docs-sa-pro/AWS-Certified-Solutions-Architect-Professional_Exam-Guide.pdf)

## Domain Weights
| Domain | Weight | Notes |
|---|---|---|
| [1. Organizational Complexity](domains/01-organizational-complexity/README.md) | 26% | Organizations, SCPs, Control Tower, multi-account networking |
| [2. New Solutions](domains/02-new-solutions/README.md) | 29% | Compute, storage, database, security, decoupling patterns |
| [3. Migration & Modernization](domains/03-migration-modernization/README.md) | 20% | 7 Rs, MGN, DMS, DataSync, modernisation patterns |
| [4. Cost & Performance](domains/04-cost-performance/README.md) | 25% | Savings Plans, Spot, storage tiers, performance optimisation |

## Services Deep Dives
- [Transit Gateway](services/networking/transit-gateway.md)
- [Direct Connect](services/networking/direct-connect.md)
- [IAM, Organizations & SCPs](services/security/iam-organizations.md)
- [Aurora](services/databases/aurora.md)

## Architecture Patterns
- [Disaster Recovery](architecture-patterns/disaster-recovery.md) — Backup & Restore → Pilot Light → Warm Standby → Active-Active
- [High Availability](architecture-patterns/high-availability.md) — Multi-AZ patterns, load balancers, Auto Scaling

## Cheatsheets
- [S3 Storage Class Decision Tree](cheatsheets/storage-class-decision-tree.md)
- [VPC Connectivity Options](cheatsheets/vpc-connectivity-options.md)
- [Common Exam Traps](cheatsheets/exam-traps.md)

## Practice
- [Questions by domain](practice/questions/)
- [Mock exam notes](practice/mock-exams/)
