import angular from 'angular'; export default angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("architecture/architecture.html","<section class=\"partial__wrapper\">{{architecture.salutation}}</section>");
$templateCache.put("fonz/fonz.html","<section class=\"partial__wrapper fonz__wrapper\">\n    <iframe width=\"640\"\n            height=\"480\"\n            src=\"https://www.youtube.com/embed/yyzK6e6py9A?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1\"\n            frameborder=\"0\"\n            allowfullscreen>\n    </iframe>\n</section>\n");
$templateCache.put("global/logout.html","<div class=\"modals\">\n    <section>Are you sure you want to logout?</section>\n    <section class=\"modals__btn__wrapper\">\n        <button class=\"a-btn--filled modals__btn\">Logout</button>\n        <button class=\"a-btn--red modals__btn\">Cancel</button>\n    </section>\n</div>\n");
$templateCache.put("global/settings.html","Hi from the settings dialog!");
$templateCache.put("design/design-abstract.html","<div ui-view class=\"partial__wrapper\"></div>\n");
$templateCache.put("home/home-abstract.html","<section class=\"abstract-context__wrapper\">\n    Cross-view context info goes here...\n</section>\n<div ui-view class=\"partial__wrapper\"></div>\n");
$templateCache.put("reporting/reporting-abstract.html","<div ui-view class=\"partial__wrapper\"></div>\n");
$templateCache.put("support/support.html","<section class=\"partial__wrapper\">\n    <label for=\"support_description\">What can we help you with?</label>\n    <textarea id=\"support_description\"></textarea>\n    <button type=\"submit\" class=\"a-btn--filled\">Send</button>\n</section>");
$templateCache.put("sysadmin/sysadmin-abstract.html","<div ui-view class=\"partial__wrapper\"></div>\n");
$templateCache.put("voiceandtone/voiceandtone.html","<section class=\"partial__wrapper\">Hi from Voice and Tone!  :)</section>\n");
$templateCache.put("design/components/design-components.html","<main class=\"partial__wrapper\">\n\n    <section class=\"throwaway__section\">\n        <h1 id=\"avatars\">Avatars</h1>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Buttons</h1>\n\n        <div class=\"throwaway__wrapper\">\n            <button class=\"a-btn\">Action</button>\n            <button class=\"a-btn--filled\">Filled</button>\n            <button class=\"a-btn\" disabled>Disabled</button>\n        </div>\n        <div class=\"throwaway__wrapper\">\n            <button class=\"a-btn--green\">Action</button>\n            <button class=\"a-btn--green--filled\">Filled</button>\n            <button class=\"a-btn--green\" disabled>Disabled</button>\n        </div>\n        <div class=\"throwaway__wrapper\">\n            <button class=\"a-btn--yellow\">Action</button>\n            <button class=\"a-btn--yellow--filled\">Filled</button>\n            <button class=\"a-btn--yellow\" disabled>Disabled</button>\n        </div>\n        <div class=\"throwaway__wrapper\">\n            <button class=\"a-btn--white\">Action</button>\n            <button class=\"a-btn--white\">Filled</button>\n            <button class=\"a-btn--white\" disabled>Disabled</button>\n        </div>\n        <div class=\"throwaway__wrapper\">\n            <button class=\"a-btn--red\">Action</button>\n            <button class=\"a-btn--red--filled\">Filled</button>\n            <button class=\"a-btn--red\" disabled>Disabled</button>\n        </div>\n\n        <h3>Button labels</h3>\n        <p>All button labels are sentence case. They should be as short as possible, while clearly explaining to\n            users\n            what happens when they press the button.</p>\n\n        <h3>Button order</h3>\n        <p>Buttons are sorted by importance from left to right.</p>\n\n        <h3>Button types</h3>\n        <h3>Button variations</h3>\n        <h3>Toggle buttons</h3>\n        <h3>Grouped buttons</h3>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Cards</h1>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Forms</h1>\n        <div class=\"throwaway__wrapper\">\n            <h3>Form details</h3>\n            <h3>Form layout</h3>\n            <h3>Label alignment</h3>\n            <h3>Affixes</h3>\n            <h3>Feedback (error and success)</h3>\n            <h3>Choices in forms</h3>\n            <h4>Single choice: Radio buttons vs. dropdowns vs. switch</h4>\n            <h4>Multiple choice: Check boxes</h4>\n            <h3>Designing long forms</h3>\n            <h4>Multi-step forms</h4>\n            <h4>Progressive disclosure</h4>\n        </div>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Lists</h1>\n        <h3>Read only lists</h3>\n        <h3>Inline-line edit</h3>\n        <h3>Multi-level lists</h3>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Messaging</h1>\n        <h3>Toast</h3>\n        <h4>Toast types</h4>\n        <h3>Inline messages</h3>\n        <h4>Inline message types</h4>\n        <h3>Banner alerts</h3>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Process indicators</h1>\n        <h3>Loading indicator</h3>\n        <h3>Progress bar</h3>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Search Criteria</h1>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Tables</h1>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Tabs</h1>\n    </section>\n\n\n    <section class=\"throwaway__section\">\n        <h1>Tooltips</h1>\n    </section>\n\n</main>\n");
$templateCache.put("design/foundations/design-foundations.html","<main class=\"partial__wrapper\">\n    <section class=\"throwaway__section\">\n        <h1>Color</h1>\n        <h3>Primary palette</h3>\n        <h3>Secondary palette</h3>\n    </section>\n    <section class=\"throwaway__section\">\n        <h1>Typography</h1>\n    </section>\n    <section class=\"throwaway__section\">\n        <h1>Iconography</h1>\n    </section>\n    <section class=\"throwaway__section\">\n        <h1>Grid</h1>\n    </section>\n</main>\n");
$templateCache.put("design/patterns/design-patterns.html","<section class=\"partial__wrapper\">\n    Hi from Design Patterns!\n    {{appVersion}}\n</section>\n");
$templateCache.put("design/onboarding/design-onboarding.html","<section class=\"partial__wrapper\">\n    Hi from the Design Onboarding!\n</section>\n");
$templateCache.put("design/overview/design-overview.html","<section class=\"partial__wrapper\">\n    Hi from the Design Overview!\n</section>\n");
$templateCache.put("home/five/home-five.html","Hi from home five");
$templateCache.put("home/four/home-four.html","Hi from home four");
$templateCache.put("home/one/home-one.html","Hi from home one");
$templateCache.put("home/three/home-three.html","Hi from home three");
$templateCache.put("home/two/home-two.html","Hi from home two");
$templateCache.put("reporting/one/reporting-one.html","Hi from reporting one");
$templateCache.put("reporting/three/reporting-three.html","Hi from reporting three");
$templateCache.put("reporting/two/reporting-two.html","Hi from reporting two");
$templateCache.put("sysadmin/one/sysadmin-one.html","<h1>500 Server Error</h1>\n<p>Sorry, something went wrong.</p>\n<p>A team is highly trained monkeys has been dispatched to deal with this situation.</p>\n<p>If you see them, show them this information (screenshots frighten them):</p>\nAB38WEMQgYMwAsSndv0qRVwB2h6TTDLZbomJEWU6qMCSOlXSieCCjveU 7hDWK8oeERuik9Fw-jLjNcz\nrdngnBDUZpExmTWm6BdtwUW26ecXKhmYi NnZ91eCdo8ejZ5bzzhv9pYvCPlTDFN6vq6pHgGMqBsfH7EMrHYFj\nlwq_ 7yWIObcAM2Ni1tTP1fR8EkhGYIwD1gpYuNLBnVT-imW3RBgFijeA8iLA v0TEZ_HkJP7rRG\nS0txolsJEP_vMnhJZKdEd3VP1zfhoB6Vl_cUhtr69 yB6be9FMd6kRpnSiItgbxPvyrFa75aJlkBe0H72CdA\nXeRifbGaDc1_q2 44Tms5HH6dfasPa9kVkzhy3GkpTbXZGIPRynzhRdrb0R8uMv-Y7kyhC6 JgEAQoe5zld02-rlMu\n6DpN6fFtkGWZ3Lt-e-hECLRuYqHX-eCW567f8c mmxd8YEGRS4qURfh4eFl1uvQ_b0rEOZTHrkzUNlTLbSI\nW6FesFccjX83 ybB5fP-21S60JudEj1ZzM6m50GPFTV8gRFDz5r7-cFR1uMkKfnq1U0FC b1Tehcova6OabgROH\nDljpM3J8jJlLEmQKqxOSugMzmelDZLVw30pMyjb Wm4U4fin2J4sTIN9AYFo-aGzmv4JvbSURzKGamVPXt2R6v2PvB5SPeB\nb yJ8oVAv5j34bClZksFlShm5xTCUEAB3q9FfoUSvqqT6pOOoeHqFEmiGl ggJcl79sAFfjSVeSRpU5qjJ4np7ve3-jImsQ\nNLO7lCC-FDq3Ao8peKPc wVQDNTXcXXTSpMkk5mWJG4LRgaVQG4mFg-gcRTphCK_hWeFsoEgrdX_D j_bdM13tBeQFFv\n8lIXNcMX6bME36U8PaBWCMjGBlhZVpZ9vArH0vehC0 FO5SPxWJsAjCJU1XY2f6AMPQioQS9h2OOZA6p6EFmGFNw-\nd5jeqvLIfx Cp3BHa_cddgBHQabZI77Db62hSoAzI-8FrJWy9dDTWjuj_MntCZcfUNY URSrXvXsiKRaz_5sJ-S2rSX\n2aCxJSne_gsgT1Y-YIzO1xBD9wuLts20G 4YX2Scpyj8mui7I8bn_Sx6H3iyFMrEVJwhneCKbeaXMiIOk6CiJNgS3s j\ndcLUB_Nv5tR35j8BvAbW5ZgNT57SKp9SDFDdTZyDfJ0Eg9aCjxARVBc T4V6Hs_c31yZ5SDnu0e9drBS5ynf_ZydZAJR9\nAEiEAQfzayUjJgy9NCB viA0_EPY2dVPOlW3VWJ7C5HhKksSXeWQ45fE0IS1WOwOlq50yvKF0SoB asoT4ziflWe92IA\n56Ds3_XXeWMBwcOjXIb2KCkqE_hdChOyZpiufLB4t Ngl5WAglVNfV1Z45omJv4MGiBgUcpICvYmkJ_OcTVi03BbS9cuX\nlBbE7 ivuqu1AfHPnKp8RBGpY_mKpLrYKYhJ5faXi2INdZ-9xh6MAqehN6cKQj SgweGtclPuX0teQye3h8P5vp425ARfQEz\nbFYmRULRQiITz16az-JgVmP Di3XaE4Qq7rFpumWPuuHGqlTjmurFIuh0SZ2sklMxPQFGOYIEjNNsEtE UPuL0DApAqnP\n1AH3mHMqHKzdgzFvg7k9Z86M5yt4CDatYmjktsuNzdBJ wArAWFRfr86x7XBdkr9eVa8Hp-6x86CzR38nypBBddU2J\nr4E8RsG8-7h iCvxlHwRoPXoGouIXflUIe5mHZveEAtQGYZzeJKFvZ8YojTLLx8bKFgu zsJ0Cll3bWmHZS5ZPH\nzppuvZauwaVKFxLX0EjjdMOiFaueno1pXfp4jm 3QqdllBQSzai4Z2wXfhU9Ql_cFzqpzfPMBNxt6mge-0ARsMsEeR5PDF\n2wNglV05GkaVp4JgWSTo7lQ3OnJKQNmECTGaYNbGR7IsGigTMc3QM0iH 9ueR3-l75e3YYMlRl9tZWquJd54eGh5vYTL\nrbW60CrBZQLSKpxqpxX_W 9x_aaEhESZSXVx0");
$templateCache.put("sysadmin/three/sysadmin-three.html","Hi from sysadmin three");
$templateCache.put("sysadmin/two/sysadmin-two.html","Hi from sysadmin two");}]);