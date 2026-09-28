# SEO AUDIT - DECISIONS REQUIRED

**Date**: 2026-09-16  
**Status**: ⏸️ AWAITING APPROVAL

---

## DECISION 1: URL Structure (REQUIRED)

**Problem**: Duplicate content - same pages accessible via two different URLs

### Option A: Nested Structure (RECOMMENDED) ✅

**Keep**:
- `/features/attendance-management`
- `/features/time-off-management`
- `/features/shift-management`
- ... (all 10 features)
- `/solutions/hr`
- `/solutions/customer-service`
- `/solutions/engineering`
- ... (all 15 solutions)

**301 Redirect**:
- `/attendance-management` → `/features/attendance-management`
- `/time-off-management` → `/features/time-off-management`
- `/hr-solutions` → `/solutions/hr`
- `/customer-service-solutions` → `/solutions/customer-service`
- ... (30+ redirects total)

**Pros**:
- ✅ Clear hierarchy (SEO best practice)
- ✅ Better site architecture
- ✅ Easier to maintain
- ✅ Scales better (more features/solutions)
- ✅ Sitemap already uses this pattern

**Cons**:
- Slightly longer URLs
- Need redirects if any external links exist to flat URLs

---

### Option B: Flat Structure (Current)

**Keep**:
- `/attendance-management`
- `/time-off-management`
- `/hr-solutions`
- `/customer-service-solutions`
- ... (all flat paths)

**Remove from sitemap**:
- `/features/*` paths
- `/solutions/*` nested paths

**Pros**:
- Shorter URLs
- No changes to internal links

**Cons**:
- ❌ Poor hierarchy (everything at root level)
- ❌ Harder to scale
- ❌ Against SEO best practices
- ❌ Sitemap needs major rewrite

---

**YOUR DECISION**: [ ] Option A (Nested) or [ ] Option B (Flat)

---

## DECISION 2: Brand Consistency (REQUIRED)

**Problem**: Mixed branding throughout site

| Element | Currently Uses |
|---------|---------------|
| Domain | workzi.app |
| Homepage title | "Workzi" |
| Features titles | "AttendX" |
| Solutions titles | "AttendX" |
| URL slugs | "attendx" in /why-attendx, etc. |

### Option A: Standardize on WORKZI ✅

**Changes**:
- Keep domain: workzi.app ✅
- Update ALL titles from "AttendX" → "Workzi"
- Update URL slugs: `/why-attendx` → `/why-workzi`
- Update URL slugs: `/attendx-vs-manual-hr` → `/workzi-vs-manual-hr`
- Update URL slugs: `/scale-with-attendx` → `/scale-with-workzi`

**Pros**:
- ✅ Matches domain
- ✅ Consistent brand
- ✅ No domain confusion

**Cons**:
- Need URL redirects
- May lose any existing "AttendX" brand equity

---

### Option B: Rebrand to ATTENDX

**Changes**:
- Consider domain migration to attendx.com/app
- Keep "AttendX" in all titles
- Keep current URL slugs
- Update homepage/about to say "AttendX"

**Pros**:
- "AttendX" is more descriptive product name

**Cons**:
- ❌ Domain mismatch (workzi.app vs AttendX)
- ❌ Requires domain migration to be fully consistent
- ❌ More expensive (new domain, redirects, rebranding)

---

**YOUR DECISION**: [ ] Option A (Workzi) or [ ] Option B (AttendX) or [ ] Other: _______

---

## DECISION 3: Generic Placeholder URLs (REQUIRED)

**Problem**: Sitemap includes generic URLs that should be dynamic

Current placeholders:
- `/blog-article` (should be `/blog/{slug}`)
- `/help-article` (should be `/help/{slug}`)
- `/job-details` (should be `/careers/jobs/{slug}`)

### Option A: Make Dynamic Routes ✅

**Implementation**:
- Update router to handle `/blog/:slug`
- Update router to handle `/help/:slug`
- Update router to handle `/careers/jobs/:slug`
- Remove generic URLs from sitemap
- Add actual article/job URLs to sitemap

**Pros**:
- ✅ SEO best practice
- ✅ Each article gets unique URL
- ✅ Better user experience

**Cons**:
- Requires router changes
- Need to populate actual content slugs

---

### Option B: Keep Generic URLs (NOT RECOMMENDED)

**YOUR DECISION**: [ ] Option A (Make dynamic) or [ ] Option B (Keep generic)

---

## DECISION 4: Client-Side Rendering Fix (CRITICAL)

**Problem**: All meta tags render client-side, invisible to search engines initially

### Option A: Document for Manual Implementation ✅

I will:
- Fix all meta tags in the code
- Document the CSR limitation
- Provide recommendations for SSR/SSG/prerendering
- You implement SSR/SSG separately

**Pros**:
- I can complete all meta tag fixes now
- You choose SSR solution that fits your stack

**Cons**:
- Meta tags won't be fully effective until SSR implemented

---

### Option B: I Implement SSR (Out of Scope)

Convert to Next.js/Remix/Astro - **this is a major framework migration**

**YOUR DECISION**: [ ] Option A (Document + you implement SSR later) or [ ] Option B (I migrate to SSR)

---

## DECISION 5: OG Image Strategy (REQUIRED)

**Problem**: No OG images exist for social sharing

### Option A: Create Image Requirements List ✅

I will:
- Add og:image meta tags with placeholder paths
- Generate list of required images with dimensions
- You create actual images

**Images needed**: 60+ unique OG images (1200×630px each)

---

### Option B: Single Global OG Image

Use one og:image for all pages

**Pros**:
- Only 1 image to create
- Simpler

**Cons**:
- ❌ Generic social previews
- ❌ Less engaging

---

**YOUR DECISION**: [ ] Option A (Unique images) or [ ] Option B (Single image)

---

## DECISION 6: Remove /education-2 Page? (OPTIONAL)

**Problem**: `/education-2` - unclear purpose, poor slug

### Options:
- [ ] A: Redirect to `/solutions/education` and remove
- [ ] B: Rename to something meaningful
- [ ] C: Keep as-is

**YOUR DECISION**: _______

---

## QUICK DECISION FORM

Please reply with your choices:

```
DECISION 1 (URL Structure): [ ] A - Nested (recommended) or [ ] B - Flat
DECISION 2 (Brand): [ ] A - Workzi or [ ] B - AttendX
DECISION 3 (Dynamic Routes): [ ] A - Make dynamic (recommended) or [ ] B - Keep generic
DECISION 4 (CSR Fix): [ ] A - Document only (recommended) or [ ] B - I migrate to SSR
DECISION 5 (OG Images): [ ] A - Unique images or [ ] B - Single image
DECISION 6 (education-2): [ ] A - Remove or [ ] B - Rename or [ ] C - Keep
```

---

**Once you provide these decisions, I will:**
1. Fix all meta tags surgically
2. Add Open Graph & Twitter Card tags
3. Add canonical tags
4. Add JSON-LD structured data
5. Update URL slugs per your choice
6. Generate redirect rules
7. Update sitemap
8. Generate image requirements list
9. Provide prioritized remaining issues list

**Time to implement after decisions**: ~30-45 minutes
