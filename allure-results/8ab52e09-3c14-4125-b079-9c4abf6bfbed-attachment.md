# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_Select\AdvanceDropdown.spec.ts >> Web Table Handling >> Select Option Page
- Location: tests\07_Select\AdvanceDropdown.spec.ts:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Playwright') resolved to 7 elements:
    1) <span class="tta-rs__placeholder">Pick a Playwright runner…</span> aka getByText('Pick a Playwright runner…')
    2) <div role="option" class="tta-rs__option" data-value="Playwright">Playwright</div> aka getByRole('option', { name: 'Playwright' })
    3) <div role="option" class="tta-rs__option" data-value="Playwright">Playwright</div> aka getByTestId('rs-multi-menu').getByText('Playwright')
    4) <strong>Playwright solutions</strong> aka getByText('Playwright solutions')
    5) <span class="token-string">'Playwright'</span> aka getByText('\'Playwright\'').first()
    6) <span class="token-string">'Playwright'</span> aka getByText('\'Playwright\'').nth(1)
    7) <span class="token-string">'Playwright'</span> aka getByText('\'Playwright\'').nth(2)

Call log:
  - waiting for getByText('Playwright')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ../index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - paragraph [ref=e21]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Overview" [ref=e27] [cursor=pointer]:
              - /url: ../index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ../multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ../webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./sortable.html
              - generic [ref=e99]: Sortable Admin Table
          - listitem [ref=e100]:
            - link "Cricket Scorecard" [ref=e101] [cursor=pointer]:
              - /url: ./scorecard.html
              - generic [ref=e103]: Cricket Scorecard
      - generic [ref=e104]:
        - paragraph [ref=e105]:
          - img [ref=e106]
          - generic [ref=e111]: Frames
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Frames overview" [ref=e114] [cursor=pointer]:
              - /url: ../frames/index.html
              - img [ref=e116]
              - generic [ref=e118]: Frames overview
          - listitem [ref=e119]:
            - link "Multi-frame frameset" [ref=e120] [cursor=pointer]:
              - /url: ../frames/multi-frames.html
              - img [ref=e122]
              - generic [ref=e127]: Multi-frame frameset
          - listitem [ref=e128]:
            - link "Nested iframes" [ref=e129] [cursor=pointer]:
              - /url: ../frames/nested-iframes.html
              - img [ref=e131]
              - generic [ref=e135]: Nested iframes
          - listitem [ref=e136]:
            - link "Courses frameset" [ref=e137] [cursor=pointer]:
              - /url: ../frames/courses-frameset.html
              - generic [ref=e139]: Courses frameset
      - generic [ref=e140]:
        - paragraph [ref=e141]:
          - img [ref=e142]
          - generic [ref=e145]: Widgets
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link "SVG locators" [ref=e148] [cursor=pointer]:
              - /url: ../widgets/svg.html
              - generic [ref=e150]: SVG locators
          - listitem [ref=e151]:
            - link "Shadow DOM" [ref=e152] [cursor=pointer]:
              - /url: ../widgets/shadow-dom.html
              - generic [ref=e154]: Shadow DOM
          - listitem [ref=e155]:
            - link "Calendar / date picker" [ref=e156] [cursor=pointer]:
              - /url: ../widgets/calendar.html
              - generic [ref=e158]: Calendar / date picker
          - listitem [ref=e159]:
            - link "Drag & drop Kanban" [ref=e160] [cursor=pointer]:
              - /url: ../widgets/dnd.html
              - generic [ref=e162]: Drag & drop Kanban
          - listitem [ref=e163]:
            - link "Toasts & notifications" [ref=e164] [cursor=pointer]:
              - /url: ../widgets/toasts.html
              - generic [ref=e166]: Toasts & notifications
          - listitem [ref=e167]:
            - link "Native dialogs" [ref=e168] [cursor=pointer]:
              - /url: ../widgets/dialogs.html
              - generic [ref=e170]: Native dialogs
          - listitem [ref=e171]:
            - link "Hover menus" [ref=e172] [cursor=pointer]:
              - /url: ../widgets/hover-menu.html
              - generic [ref=e174]: Hover menus
          - listitem [ref=e175]:
            - link "Right-click menu" [ref=e176] [cursor=pointer]:
              - /url: ../widgets/context-menu.html
              - generic [ref=e178]: Right-click menu
          - listitem [ref=e179]:
            - link "Keyboard navigation" [ref=e180] [cursor=pointer]:
              - /url: ../widgets/keyboard-form.html
              - generic [ref=e182]: Keyboard navigation
      - generic [ref=e183]:
        - paragraph [ref=e184]:
          - img [ref=e185]
          - generic [ref=e188]: Network
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "Network interception" [ref=e191] [cursor=pointer]:
              - /url: ../network/intercept.html
              - generic [ref=e193]: Network interception
      - generic [ref=e194]:
        - paragraph [ref=e195]:
          - img [ref=e196]
          - generic [ref=e198]: Coming next
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e201]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e202]:
      - generic [ref=e203]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e204] [cursor=pointer]:
        - img [ref=e205]
  - generic [ref=e207]:
    - banner [ref=e208]:
      - button "Open sidebar" [ref=e209] [cursor=pointer]:
        - img [ref=e210]
      - generic [ref=e212]:
        - link "Practice" [ref=e213] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e214]
        - generic [ref=e216]: Tables & Forms
        - img [ref=e217]
        - strong [ref=e219]: Select Box Variants
      - generic [ref=e220]:
        - generic [ref=e221] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e222]
          - generic [ref=e223]: Locator markers
        - generic [ref=e224]: 5 variants
        - button "Toggle dark mode" [ref=e225] [cursor=pointer]:
          - img [ref=e226]
          - img [ref=e228]
    - main [ref=e231]:
      - region "Select box variants practice" [ref=e232]:
        - generic [ref=e233]: Form practice · Combobox variants
        - heading "Select box variants practice" [level=1] [ref=e235]:
          - text: Select
          - emphasis [ref=e236]: box variants
          - text: practice
        - paragraph [ref=e237]:
          - text: Five custom-built combobox variants — single, multi, creatable, grouped, and async. DOM classes intentionally mirror the popular
          - code [ref=e238]: react-select
          - text: conventions (
          - code [ref=e239]: tta-rs__control
          - text: ","
          - code [ref=e240]: tta-rs__menu
          - text: ","
          - code [ref=e241]: tta-rs__option
          - text: ) so your locators transfer to real production widgets.
      - region "Select box variants workspace" [ref=e242]:
        - generic [ref=e243]:
          - generic [ref=e244]:
            - generic [ref=e245]:
              - heading "① Single — searchable" [level=2] [ref=e246]
              - generic [ref=e247]: Type to filter
            - paragraph [ref=e248]: Click to open. Type to filter the list. Click an option to set a single value.
            - generic [ref=e249]:
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: Pick a Playwright runner…
                  - textbox "Filter options" [active] [ref=e254]
                - generic [ref=e255]:
                  - button "Clear value" [ref=e256] [cursor=pointer]:
                    - img [ref=e257]
                  - img [ref=e261]
              - listbox [ref=e263]:
                - generic [ref=e264]:
                  - option "Playwright" [ref=e265] [cursor=pointer]
                  - option "Cypress" [ref=e266] [cursor=pointer]
                  - option "WebdriverIO" [ref=e267] [cursor=pointer]
                  - option "Selenium" [ref=e268] [cursor=pointer]
                  - option "TestCafe (deprecated)" [ref=e269]
                  - option "Puppeteer" [ref=e270] [cursor=pointer]
            - generic [ref=e271]:
              - generic [ref=e272]:
                - generic [ref=e273]: id
                - text: =rs-single
              - generic [ref=e274]:
                - generic [ref=e275]: data-testid
                - text: =rs-single · rs-single-input · rs-single-menu
              - generic [ref=e276]:
                - generic [ref=e277]: class
                - text: =tta-rs__control · tta-rs__option
          - generic [ref=e278]:
            - generic [ref=e279]:
              - heading "② Multi — chips with remove" [level=2] [ref=e280]
              - generic [ref=e281]: Multiple values
            - paragraph [ref=e282]: Pick multiple options. Each becomes a removable chip with its own X button.
            - generic [ref=e284]:
              - generic [ref=e285]:
                - generic [ref=e286]: Pick automation tools…
                - textbox "Filter options" [ref=e288]
              - generic [ref=e289]:
                - button "Clear values" [ref=e290] [cursor=pointer]:
                  - img [ref=e291]
                - img [ref=e295]
            - generic [ref=e297]:
              - generic [ref=e298]:
                - generic [ref=e299]: data-testid
                - text: =rs-multi · rs-multi-input
              - generic [ref=e300]:
                - generic [ref=e301]: chip
                - text: =tta-rs__multi-value
              - generic [ref=e302]:
                - generic [ref=e303]: remove
                - text: =tta-rs__multi-value__remove
          - generic [ref=e304]:
            - generic [ref=e305]:
              - heading "③ Creatable multi — type and Enter" [level=2] [ref=e306]
              - generic [ref=e307]: Add new options
            - paragraph [ref=e308]:
              - text: Type a tag that doesn't exist, press
              - code [ref=e309]: Enter
              - text: ", and a new chip is created on the fly."
            - generic [ref=e311]:
              - generic [ref=e312]:
                - generic [ref=e313]: Add skill tags…
                - textbox "Add a tag" [ref=e315]
              - generic [ref=e316]:
                - button "Clear values" [ref=e317] [cursor=pointer]:
                  - img [ref=e318]
                - img [ref=e322]
            - generic [ref=e324]:
              - generic [ref=e325]:
                - generic [ref=e326]: data-testid
                - text: =rs-creatable · rs-creatable-input
              - generic [ref=e327]:
                - generic [ref=e328]: create
                - text: =press Enter
          - generic [ref=e329]:
            - generic [ref=e330]:
              - heading "④ Grouped — categorised options" [level=2] [ref=e331]
              - generic [ref=e332]: Groups
            - paragraph [ref=e333]: Options are split into labelled groups. Practise reaching an option inside a specific group heading.
            - generic [ref=e335]:
              - generic [ref=e336]:
                - generic [ref=e337]: Pick a deployment target…
                - textbox "Filter options" [ref=e339]
              - img [ref=e343]
            - generic [ref=e345]:
              - generic [ref=e346]:
                - generic [ref=e347]: data-testid
                - text: =rs-grouped
              - generic [ref=e348]:
                - generic [ref=e349]: group
                - text: =tta-rs__group · data-group=Cloud / Edge / Self-hosted
          - generic [ref=e350]:
            - generic [ref=e351]:
              - heading "⑤ Async — fetched on type" [level=2] [ref=e352]
              - generic [ref=e353]: 600ms latency
            - paragraph [ref=e354]:
              - text: Type a city name. Results load after a simulated 600ms network call. Practise
              - code [ref=e355]: page.waitForResponse
              - text: patterns or just await a visible option.
            - generic [ref=e357]:
              - generic [ref=e358]:
                - generic [ref=e359]: Type to search cities…
                - textbox "Search cities" [ref=e361]
              - img [ref=e364]
            - generic [ref=e366]:
              - generic [ref=e367]:
                - generic [ref=e368]: data-testid
                - text: =rs-async · rs-async-input · rs-async-menu
              - generic [ref=e369]:
                - generic [ref=e370]: state
                - text: =loading / no-results / results
          - generic [ref=e371]: No selection yet — interact with the variants above.
        - complementary [ref=e372]:
          - generic [ref=e373]:
            - heading "What students should practise" [level=3] [ref=e374]
            - list [ref=e375]:
              - listitem [ref=e376]:
                - text: Click
                - code [ref=e377]: .tta-rs__control
                - text: to open, then click
                - code [ref=e378]: .tta-rs__option
                - text: by visible text.
              - listitem [ref=e379]:
                - text: Type into
                - code [ref=e380]: .tta-rs__input-container input
                - text: to filter options.
              - listitem [ref=e381]:
                - text: "Multi: remove a chip via its"
                - code [ref=e382]: .tta-rs__multi-value__remove
                - text: button.
              - listitem [ref=e383]: "Creatable: type a brand-new value and press Enter; assert the chip appears."
              - listitem [ref=e384]:
                - text: "Grouped: scope a query under a specific"
                - code [ref=e385]: .tta-rs__group[data-group="Edge"]
                - text: .
              - listitem [ref=e386]: "Async: wait for the loading notice to disappear, then click the result."
          - group [ref=e387]:
            - generic "Playwright solutions One snippet per variant. Show solution" [ref=e388] [cursor=pointer]:
              - img [ref=e390]
              - generic [ref=e392]:
                - strong [ref=e393]: Playwright solutions
                - generic [ref=e394]: One snippet per variant.
              - generic [ref=e395]: Show solution
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('Web Table Handling', () => { 
  4  |     test('Select Option Page', async ({ page }) => {
  5  |         // Navigate to a sample page
  6  |         await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
  7  | 
  8  |         await page.locator('#rs-single.tta-rs').click();
> 9  |         await page.getByText('Playwright').click();
     |                                            ^ Error: locator.click: Error: strict mode violation: getByText('Playwright') resolved to 7 elements:
  10 |         
  11 |         await page.waitForTimeout(5000);
  12 |     });
  13 | })
```