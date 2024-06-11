import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n    fill: var(--dl-color-gray-black);\n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link
            rel="shortcut icon"
            href="/ez-favicon.svg"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                "</noscript><script async src=\"https://cdn.tolt.io/tolt.js\" data-tolt=\"81e6dc34-d8f3-4443-a30c-e2d31cba595f\"></script>\n\n<style>\n  body::-webkit-scrollbar {\n    width: 0.5em;\n    z-index: 100;\n    background-color:transparent;\n  }\n  \n\n body::-webkit-scrollbar-thumb {\n    background-color:white;\n    box-shadow:0 -100vh 0 100vh #246b96;//magic\n  }\n</style> \n    <style data-section-id='dropdown'>[data-thq=\"thq-dropdown\"]:hover > [data-thq=\"thq-dropdown-list\"] {\n    display: flex; \n  }\n\n  [data-thq=\"thq-dropdown\"]:hover > div [data-thq=\"thq-dropdown-arrow\"] {\n    transform: rotate(90deg); \n  }</style>\n\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js\"></script>\n\n  <!-- Google Analytics -->\n  <!-- Google tag (gtag.js) -->\n  <!-- <script async src=\"https://www.googletagmanager.com/gtag/js?id=%REACT_APP_GA_MEASUREMENT_ID%\"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', '%REACT_APP_GA_MEASUREMENT_ID%');\n  </script> -->\n\n  <!-- Lucky Orange -->\n  <script async defer src=\"https://tools.luckyorange.com/core/lo.js?site-id=18537fa4\"></script>\n\n  <!-- FreshChat -->\n  <!-- <script src='//fw-cdn.com/2736569/3088424.js' chat='true'></script> -->\n\n  <!-- Freshdesk -->\n  <script>\n    window.fwSettings={\n    'widget_id':151000001468\n    };\n    !function(){if(\"function\"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() \n  </script>\n  <script type='text/javascript' src='https://widget.freshworks.com/widgets/151000001468.js' async defer></script>\n\n<script>\n    /*\nAccordion - Code Embed\n*/\n\n/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,\nthe Accordions will still work*/\n\nconst listenForUrlChangesAccordion = () => {\n  let url = location.href;\n  $(document).on('click', () => {\n    requestAnimationFrame(() => {\n      if (url !== location.href) {\n        runAccordionCodeEmbed();\n        runPricingChangeOption();\n        url = location.href;\n      }\n    });\n  });\n}\n\n\nconst runAccordionCodeEmbed = () => {\n    const accordionContainers = document.querySelectorAll('[data-role=\"accordion-container\"]'); // All accordion containers\n    const accordionContents = document.querySelectorAll('[data-role=\"accordion-content\"]'); // All accordion content\n    const accordionIcons = document.querySelectorAll('[data-role=\"accordion-icon\"]'); // All accordion icons\n\n    accordionContents.forEach((accordionContent, index) => {\n      if(!accordionContent.classList.contains('default-show')){ //Hides all accordion contents, except the first one\n        accordionContent.style.display = \"none\"; //Hides all accordion contents\n      }\n    });\n\n    accordionContainers.forEach((accordionContainer, index) => {\n        accordionContainer.addEventListener(\"click\", () => {\n            accordionContents.forEach((accordionContent) => {\n            accordionContent.style.display = \"none\"; //Hides all accordion contents\n            });\n\n            accordionIcons.forEach((accordionIcon) => {\n                accordionIcon.style.transform = \"rotate(0deg)\"; // Resets all icon transforms to 0deg (default)\n            });\n\n            accordionContents[index].style.display = \"flex\"; // Shows accordion content\n            accordionIcons[index].style.transform = \"rotate(180deg)\"; // Rotates accordion icon 180deg\n        });\n    });\n}\n\nconst runPricingChangeOption = () => {\n  if($){\n    $(document).on('change','#team_plan_option', (evt) => {\n      const val = parseInt(evt.target.value);\n      switch(val){\n        case 1:\n          $('#team_plan_price').html('89');\n          $('#ez_team_plan_button').parent().attr('href','https://app.ezcoordinator.com/register?subscription=13');\n          break;\n        case 2:\n          $('#team_plan_price').html('119');\n          $('#ez_team_plan_button').parent().attr('href','https://app.ezcoordinator.com/register?subscription=14');\n          break;\n        case 3:\n          $('#team_plan_price').html('159');\n          $('#ez_team_plan_button').parent().attr('href','https://app.ezcoordinator.com/register?subscription=15');\n          break;\n        case 4:\n          $('#team_plan_price').html('249');\n          $('#ez_team_plan_button').parent().attr('href','https://app.ezcoordinator.com/register?subscription=16');\n          break;\n      }\n    });\n  }\n}\n\nrunAccordionCodeEmbed()\nlistenForUrlChangesAccordion()\n\n/*\nHere's what the above is doing:\n    1. Selects all accordion containers, contents, and icons\n    2. Hides all accordion contents\n    3. Adds an event listener to each accordion container\n    4. When an accordion container is clicked, it:\n        - Hides all accordion contents\n        - Resets all icon transforms to 0deg (default)\n        - Checks if this container has class \"accordion-open\"\n            - If it does, it removes class \"accordion-open\"\n            - If it doesn't, it:\n                - Removes class \"accordion-open\" from all containers\n                - Adds class \"accordion-open\" to this container\n                - Shows accordion content\n                - Rotates accordion icon 180deg\n*/\n\n</script>\n\n<!-- Meta Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '1553066931916834');\nfbq('track', 'PageView');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\nsrc=\"https://www.facebook.com/tr?id=1553066931916834&ev=PageView&noscript=1\"\n/></noscript>\n<!-- End Meta Pixel Code --><noscript>",
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=G-VTH6EHSE13"
            async
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-VTH6EHSE13');",
            }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','G-VTH6EHSE13');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<!-- Your body code here -->\n<!-- <script type=\"text/javascript\"> ... </script> --> \n    <script data-section-id='header' src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>",
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
