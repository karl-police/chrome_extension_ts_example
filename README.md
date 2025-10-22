NextJS is used for static rendering. And also that means the Next Router needs to be used for routing instead.

I think it also follows specific formats, e.g. pages being in "pages" and etc.


In the example the ``dist`` goes to ``dist_custom_dir``.

For injection based scripts and etc. I guess they all need their own entry.

Extension is made to enable on https://example.com.

---

Source maps may need to be made accessible through ``web_accessible_resources`` or else they won't be able to load in the browser.
