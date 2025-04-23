// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="chap_01/intro.html"><strong aria-hidden="true">1.</strong> Getting Started with Rust for Data Analysis</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_01/why-rust.html"><strong aria-hidden="true">1.1.</strong> Why Rust for Data Analysis?</a></li><li class="chapter-item expanded "><a href="chap_01/setup.html"><strong aria-hidden="true">1.2.</strong> Setting Up Your Environment</a></li><li class="chapter-item expanded "><a href="chap_01/essential-crates.html"><strong aria-hidden="true">1.3.</strong> Essential Crates for Data Analysis</a></li><li class="chapter-item expanded "><a href="chap_01/first-project.html"><strong aria-hidden="true">1.4.</strong> Your First Data Analysis Project</a></li></ol></li><li class="chapter-item expanded "><a href="chap_02/intro.html"><strong aria-hidden="true">2.</strong> Working with Data in Rust</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_02/file-io.html"><strong aria-hidden="true">2.1.</strong> Reading and Writing Data Files</a></li><li class="chapter-item expanded "><a href="chap_02/csv-json.html"><strong aria-hidden="true">2.2.</strong> CSV and JSON Processing</a></li><li class="chapter-item expanded "><a href="chap_02/databases.html"><strong aria-hidden="true">2.3.</strong> Working with Databases</a></li><li class="chapter-item expanded "><a href="chap_02/preprocessing.html"><strong aria-hidden="true">2.4.</strong> Data Cleaning and Preprocessing</a></li></ol></li><li class="chapter-item expanded "><a href="chap_03/intro.html"><strong aria-hidden="true">3.</strong> Data Structures and Algorithms</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_03/vectors-matrices.html"><strong aria-hidden="true">3.1.</strong> Vectors, Arrays and Matrices</a></li><li class="chapter-item expanded "><a href="chap_03/polars.html"><strong aria-hidden="true">3.2.</strong> DataFrames with Polars</a></li><li class="chapter-item expanded "><a href="chap_03/ndarray.html"><strong aria-hidden="true">3.3.</strong> Working with ndarray</a></li><li class="chapter-item expanded "><a href="chap_03/custom-structures.html"><strong aria-hidden="true">3.4.</strong> Implementing Custom Data Structures</a></li></ol></li><li class="chapter-item expanded "><a href="chap_04/intro.html"><strong aria-hidden="true">4.</strong> Statistical Analysis</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_04/descriptive.html"><strong aria-hidden="true">4.1.</strong> Descriptive Statistics</a></li><li class="chapter-item expanded "><a href="chap_04/distributions.html"><strong aria-hidden="true">4.2.</strong> Probability Distributions</a></li><li class="chapter-item expanded "><a href="chap_04/hypothesis-testing.html"><strong aria-hidden="true">4.3.</strong> Hypothesis Testing</a></li><li class="chapter-item expanded "><a href="chap_04/regression.html"><strong aria-hidden="true">4.4.</strong> Regression Analysis</a></li></ol></li><li class="chapter-item expanded "><a href="chap_05/intro.html"><strong aria-hidden="true">5.</strong> Data Visualization</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_05/plotters.html"><strong aria-hidden="true">5.1.</strong> Plotting with Plotters</a></li><li class="chapter-item expanded "><a href="chap_05/interactive.html"><strong aria-hidden="true">5.2.</strong> Interactive Visualizations</a></li><li class="chapter-item expanded "><a href="chap_05/custom-viz.html"><strong aria-hidden="true">5.3.</strong> Creating Custom Visualizations</a></li><li class="chapter-item expanded "><a href="chap_05/exporting.html"><strong aria-hidden="true">5.4.</strong> Exporting Charts and Graphs</a></li></ol></li><li class="chapter-item expanded "><a href="chap_06/intro.html"><strong aria-hidden="true">6.</strong> Machine Learning in Rust</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_06/ecosystem.html"><strong aria-hidden="true">6.1.</strong> Machine Learning Ecosystem in Rust</a></li><li class="chapter-item expanded "><a href="chap_06/linfa.html"><strong aria-hidden="true">6.2.</strong> Linear Models with linfa</a></li><li class="chapter-item expanded "><a href="chap_06/burn.html"><strong aria-hidden="true">6.3.</strong> Neural Networks with burn</a></li><li class="chapter-item expanded "><a href="chap_06/evaluation.html"><strong aria-hidden="true">6.4.</strong> Model Evaluation and Validation</a></li></ol></li><li class="chapter-item expanded "><a href="chap_07/intro.html"><strong aria-hidden="true">7.</strong> Performance Optimization</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_07/benchmarking.html"><strong aria-hidden="true">7.1.</strong> Benchmarking Your Analysis</a></li><li class="chapter-item expanded "><a href="chap_07/parallelism.html"><strong aria-hidden="true">7.2.</strong> Parallelism and Concurrency</a></li><li class="chapter-item expanded "><a href="chap_07/simd.html"><strong aria-hidden="true">7.3.</strong> SIMD Operations</a></li><li class="chapter-item expanded "><a href="chap_07/memory.html"><strong aria-hidden="true">7.4.</strong> Memory Optimization</a></li></ol></li><li class="chapter-item expanded "><a href="chap_08/intro.html"><strong aria-hidden="true">8.</strong> Building Data Analysis Applications</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_08/cli-tools.html"><strong aria-hidden="true">8.1.</strong> Command-Line Data Tools</a></li><li class="chapter-item expanded "><a href="chap_08/web-apis.html"><strong aria-hidden="true">8.2.</strong> Web APIs for Data Services</a></li><li class="chapter-item expanded "><a href="chap_08/desktop-apps.html"><strong aria-hidden="true">8.3.</strong> Desktop Applications with egui</a></li><li class="chapter-item expanded "><a href="chap_08/deployment.html"><strong aria-hidden="true">8.4.</strong> Deploying Data Analysis Code</a></li></ol></li><li class="chapter-item expanded "><a href="chap_09/intro.html"><strong aria-hidden="true">9.</strong> Case Studies</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_09/finance.html"><strong aria-hidden="true">9.1.</strong> Financial Data Analysis</a></li><li class="chapter-item expanded "><a href="chap_09/scientific.html"><strong aria-hidden="true">9.2.</strong> Scientific Computing</a></li><li class="chapter-item expanded "><a href="chap_09/big-data.html"><strong aria-hidden="true">9.3.</strong> Big Data Processing</a></li><li class="chapter-item expanded "><a href="chap_09/real-time.html"><strong aria-hidden="true">9.4.</strong> Real-time Data Analysis</a></li></ol></li><li class="chapter-item expanded "><a href="chap_10/intro.html"><strong aria-hidden="true">10.</strong> Future Directions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_10/emerging-tools.html"><strong aria-hidden="true">10.1.</strong> Emerging Tools and Libraries</a></li><li class="chapter-item expanded "><a href="chap_10/python-integration.html"><strong aria-hidden="true">10.2.</strong> Integrating with Python Ecosystem</a></li><li class="chapter-item expanded "><a href="chap_10/contributing.html"><strong aria-hidden="true">10.3.</strong> Contributing to the Rust Data Ecosystem</a></li><li class="chapter-item expanded "><a href="chap_10/resources.html"><strong aria-hidden="true">10.4.</strong> Resources for Further Learning</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
