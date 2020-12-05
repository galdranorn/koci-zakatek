# Base

Based on Netlify's [Jekyll + Netlify CMS](https://github.com/netlify-templates/jekyll-netlify-cms) starter template.
For help with templates, local development and other, check the [Jekyll Docs](https://jekyllrb.com/docs/home/).

# Local Development

Clone this repository and run:

```bash
bundle install
bundle exec jekyll server --watch
```

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the CMS.

# Icons

Icons are implemented using [Icomoon](https://icomoon.io/).
To add new icon through icomoon:
1. Go to icomoon site, click "Icomoon App" button.
2. Click "Import Icons" button and import selection.json from project assets folder.
3. Import icons you want to add or find matching icons in free icomoon set.
4. Select new icon and click Generate Font and Generate SVG & More buttons at the bottom of the page.
Two .zip files should be downloaded.
5. From "icomoon v1.0" archive:
- take selection.json file and put in /assets,
- take mycollection/font folder files (in .eot, .svg, .ttf and .woff formats) and put in assets/icons
- copy new icons from style.scss file and put at the end of /sass/global/icons.scss file.
6. From "icomoon" archive take new SVG icons from svg folder and put in assets/icons/SVG.
7. Check in html if everything works. To add an icon create span element with class="icon icon-<new icon name>.
