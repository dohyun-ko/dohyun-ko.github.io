import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

for (const prefix of ["", "/ko"]) {
  for (const page of ["/", "/resume/", "/printable/"]) {
    const pathname = `${prefix}${page}`;
    const html = await readFile(join("build", pathname, "index.html"), "utf8");
    const body = html.split("<body>")[1];
    const korean = prefix === "/ko";
    assert.ok(html.includes(`lang="${korean ? "ko-KR" : "en-US"}"`), pathname);
    assert.match(body, /<h1\b[^>]*>[^<]+<\/h1>/, pathname);
    assert.ok(body.includes(korean ? "고도현" : "Dohyun Ko"), pathname);
    assert.ok(
      body.includes(korean ? "프론트엔드 개발자로" : "A front-end developer"),
      pathname,
    );
    assert.match(body, /O2ARC 3\.0/, pathname);
    assert.match(body, /is-an\.ai/, pathname);
    if (page !== "/printable/") {
      assert.ok(body.includes(korean ? "사용 기술" : "Technologies"), pathname);
    }
    if (!korean) {
      assert.doesNotMatch(body, /사용 기술/, pathname);
    }
    assert.ok(body.includes(`href="${page}"`), pathname);
    assert.ok(body.includes(`href="/ko${page}"`), pathname);
    assert.match(html, /<style data-styled="true"/, pathname);
    assert.doesNotMatch(html, /<!--app-html-->|\/src\/main\.tsx/, pathname);

    for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
      await access(join("build", match[1]));
    }
    console.log(
      `Verified static content, language, styles and assets: ${pathname}`,
    );
  }
}
