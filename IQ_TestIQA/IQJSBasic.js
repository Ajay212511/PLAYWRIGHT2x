
function normalizeJsBasicsLabel(label) {
let normalized =label.trim().toLowerCase().replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-").replace(/^-+|-+$/g,"");
  console.log(`js-basic-${normalized}`);
 return;
}
normalizeJsBasicsLabel("     Ajay  Input  ");
normalizeJsBasicsLabel("User Profile: Edit!")
normalizeJsBasicsLabel("---Search@@Box---")
normalizeJsBasicsLabel(" ")