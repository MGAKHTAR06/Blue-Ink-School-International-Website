# Blue Ink School International — Website & NVR Learning Hub

Website and interactive learning platform for **Blue Ink School International** (Birdpur, Uttar Pradesh), built and maintained in a media / web-development capacity. Its centrepiece is an interactive **Non-Verbal Reasoning (NVR) Learning Hub** currently used by **~300 students**.
 **Live:** [blueinkschoolinternational.com](https://blueinkschoolinternational.com)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)

---

## Overview

The site presents the school and hosts a self-contained learning tool for Non-Verbal Reasoning practice. Because it's used by real students in a school setting, the emphasis was on something reliable, fast to load, and easy to keep accurate — including a way to push corrections to answer keys without rebuilding the whole thing.

## What I Built

- **NVR Learning Hub** — an interactive practice tool with **three difficulty levels** of image-based questions, so students can work up through increasing challenge.
- **Self-contained question images** — encoded every question image as a **base64 WebP string stored directly in JS data files**. This keeps each question fully portable (no separate image files to request or lose), and WebP keeps the payload small.
- **Answer keys & explanations** — built **per-question answer keys with written explanations**, so the tool teaches rather than just marks.
- **Answer-key update workflow** — set up a workflow to **correct and update answer keys** after the fact, which matters when hundreds of students are relying on them being right.
- **School website** — built and iterated on the main site around this learning tool.
- **Supporting learning materials** — also produced NVR answer-key documents for Books 1–3 and animated HTML lesson clips for a speaking-practice book.

## Technical Highlights

- **Data-driven content** — questions live in structured JS data files, so adding or editing content doesn't touch the page logic.
- **Embedded assets** — base64-encoded WebP images make each question a single self-contained record.
- **Delivery** — hosted on Fasthosts and served through Cloudflare for DNS/CDN.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Front-end | HTML / CSS / JavaScript |
| Question images | WebP, base64-encoded in JS |
| Hosting / CDN | Fasthosts + Cloudflare |

##  How the Question Data Works

Each question is an entry in a level's data file, carrying its own image, answer and explanation:

```js
{
  id: "L1-Q1",
  image: "data:image/webp;base64,....",
  answer: "C",
  explanation: "The shape rotates 90° clockwise each step."
}
```


## 👤 Author

Built and maintained by **Musab** — [LinkedIn]((https://www.linkedin.com/in/musab-akhtar/)) 
