import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { RenderPlugin } from "@11ty/eleventy";


export default function(eleventyConfig) {
	// Order matters, put this at the top of your configuration file.
	// This is relative to your input directory!
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(RenderPlugin);

  eleventyConfig.addCollection("pages", function(collection) {
    const coll = collection.getFilteredByTag("pages");

    for(let i = 0; i < coll.length ; i++) {
        const prevPost = coll[i-1];
        const nextPost = coll[i + 1];

        coll[i].data["prevPost"] = prevPost;
        coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });
 
eleventyConfig.addPassthroughCopy("./src/_css");
eleventyConfig.addPassthroughCopy("./src/_assets");
eleventyConfig.addPassthroughCopy("./src/_fonts");

eleventyConfig.addShortcode("video", (yt_id, width=640, height=480, align="left") => {
    return `<p class="lti-embed" style="text-align: ${align}; margin-top:40px; margin-bottom:0px"><strong>
    <iframe class="lti-embed" style="width:${width}px; height:${height}px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen frameborder="0" height="auto"
            src="https://www.youtube-nocookie.com/embed/${yt_id}">
        </iframe></strong></p>`
});

eleventyConfig.addPairedShortcode("section", (content) => {
    return `<section class="deltionv2-addinformation-section">
                <div class="deltionv2-addsize">${content}</div>
            </section>`;
});

eleventyConfig.addPairedShortcode("text", (text) => {
    return `<div class="deltionv2-addintrotext">${text}</div>`;
});

eleventyConfig.addPairedShortcode("code", (text) => {
    return `<div style="background-color: #fff; padding: 0px; ">${text}</div>`;
});

eleventyConfig.addShortcode("afbeelding", (afbeelding, width = 100, height = 100) => {
    return `<div class="deltionv2-addcontentarea"><img src="/_assets/${afbeelding}" alt="${afbeelding}" style="min-width:${width}%; width: ${width}%; height: ${height}%; object-fit: cover;" /></div>`
});

eleventyConfig.addPairedShortcode("section_accordeon", (content, titel) => {
    return `<section class="deltionv2-accordeon"><h3>${titel}</h3>${content}</section>`
});

eleventyConfig.addPairedShortcode("accordeon_v2", (content, titel) => {
    return `<div class="deltionv2-accordion-whole"><div class="deltionv2-accordion"><div class="deltionv2-arrow-container"><img
                                    src="/_assets/pijl.svg"
                                    alt="PijlOnder-1.svg"></div>
                                    <summary>${titel}</summary>
                                    <div class="deltionv2-accordion-panel"><details>${content}</details></div></div>`
});
eleventyConfig.addPairedShortcode("accordeon", (content, titel) => {
    return `<div class="deltionv2-accordion-whole">
    <details><summary><a>${titel}</a></summary>
    <p>${content}</p></details>
    </div>`
});
eleventyConfig.addPlugin(syntaxHighlight);

return {
    pathPrefix: "//",
    dir: {
        input: "src",
        output: "www",
    },
};

}