$(document).ready(function () {
    $(document).ready(function () {
        $('.publications-list .publication-item').each(function () {
            const articleId = $(this).data('article');
            const $contentDiv = $('<div></div>')
                .addClass('publication-content')
                .attr('id', `content-${articleId}`)
                .hide();
            if (articleId === 1) {
                const contentHtml = $(`#publication-${articleId}`).find('.article-post').html() || '';

                const imageRowHtml = `
                <div class="masterstrokes-images" style="display: flex; justify-content: space-around; margin: 15px 0;">
                    <img src="assets/images/post1b.png" alt="MasterStrokes Invite" style="max-width: 48%; height: auto;">
                    <img src="assets/images/post1a.png" alt="MasterStrokes" style="max-width: 48%; height: auto;">
                </div>
            `;
                $contentDiv.html(contentHtml + imageRowHtml);
            }
            else if ($(`#publication-${articleId}`).length) {
                $contentDiv.html($(`#publication-${articleId}`).find('.article-post').html());
            } else {
                $contentDiv.html('<p>Content is currently being prepared.</p>');
            }

            $(this).after($contentDiv);
        });
        $('<style>')
            .prop('type', 'text/css')
            .html(`
            .publication-item {
                cursor: pointer;
                transition: all 0.2s ease;
                padding: 10px;
                border-radius: 5px;
            }
            .publication-item:hover {
                background-color: #f5f5f5;
            }
            .publication-item.active {
                background-color: #e9e9e9;
                font-weight: bold;
            }
            .publication-content {
                padding: 15px;
                margin: 0 0 15px 20px;
                border-left: 3px solid #ccc;
                background-color: #f9f9f9;
            }
            .publication-content p {
                margin-bottom: 10px;
                line-height: 1.6;
            }
        `)
            .appendTo('head');
        const originalClickHandler = $('.publication-item').prop('onclick');
        $('.publication-item').prop('onclick', null).off('click');
        $('.publication-item').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const articleId = $(this).data('article');
            const $contentDiv = $(`#content-${articleId}`);
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $contentDiv.slideUp(300);
                return;
            }
            $('.publication-item.active').removeClass('active');
            $('.publication-content').slideUp(300);
            $(this).addClass('active');
            $contentDiv.slideDown(300);
        });

        function createBookPages() {
            $('#book').html('');
            $('#book').append('<div class="hard cover"><h1>Publications</h1><p>By Shambhavi Sharma</p></div>');
            $('#book').append('<div class="hard"></div>');
            $('#book').append('<div class="page toc-page"><h2 class="posttitle">Table of Contents</h2>' +
                '<ol style="list-style-type: decimal; padding-left: 20px;">' +
                '<li>MasterStrokes 2025</li>' +
                '<li>Should I be responsible for what I believe</li>' +
                '<li>The brother who drives me crazy</li>' +
                '<li>Embracing my roots: G20</li>' +
                '<li>Empowering girls with dignity and confidence</li>' +
                '<li>Lola - my lost and found love</li>' +
                '<li>Workforce and education</li>' +
                '<li>Global Health and education</li>' +
                '</ol></div>');
            const p1Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">MasterStrokes 2025</h1>' +
                '</div></div>');
            $('#book').append(p1Title);
            const p1Content = $('#publication-1').find('.article-post').html() || '<p>This content is currently being prepared.</p>';
            const p1Parts = splitContentIntoBetterPages(p1Content, 10);
            const p1Image1 = $('<div class="page"><div class="page-content">' +
                '<img src="assets/images/post1b.png" alt="MasterStrokes Invite" style="max-width:90%; height:auto;" />' +
                '</div></div>');
            $('#book').append(p1Image1);

            const p1Image2 = $('<div class="page"><div class="page-content">' +
                '<img src="assets/images/post1a.png" alt="MasterStrokes" style="max-width:90%; height:auto;" />' +
                '</div></div>');
            $('#book').append(p1Image2);
            const p2Content = $('#publication-2').find('.article-post').html();
            const p2Parts = splitContentIntoBetterPages(p2Content, 11);

            const p2Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">SHOULD I BE HELD RESPONSIBLE FOR WHAT I BELIEVE?</h1>' +
                '</div></div>');
            $('#book').append(p2Title);

            p2Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            const p3Content = $('#publication-3').find('.article-post').html();
            const p3Parts = splitContentIntoBetterPages(p3Content, 4);

            const p3Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">The brother who drives me crazy</h1>' +
                '</div></div>');
            $('#book').append(p3Title);

            p3Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            const p4Content = $('#publication-4').find('.article-post').html();
            const p4Parts = splitContentIntoBetterPages(p4Content, 3);

            const p4Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">Embracing My Roots: Representing India on the Global Stage</h1>' +
                '<p>By Shambhavi Sharma</p>' +
                '</div></div>');
            $('#book').append(p4Title);

            const p4Image = $('<div class="page"><div class="page-content">' +
                '<img src="assets/images/post5.png" alt="Shambhavi Sharma at G20" style="max-width:90%; height:auto;" />' +
                '</div></div>');
            $('#book').append(p4Image);

            p4Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            const p5Content = $('#publication-5').find('.article-post').html();
            const p5Parts = splitContentIntoBetterPages(p5Content, 3);

            const p5Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">Empowering Girls with Dignity and Confidence</h1>' +
                '<p>By Shambhavi Sharma</p>' +
                '</div></div>');
            $('#book').append(p5Title);
            const p5Image = $('<div class="page"><div class="page-content">' +
                '<img src="assets/images/post6.png" alt="Empowering Girls with Dignity" style="max-width:90%; height:auto;" />' +
                '</div></div>');
            $('#book').append(p5Image);
            p5Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            const p6Content = $('#publication-6').find('.article-post').html();
            const p6Parts = splitContentIntoBetterPages(p6Content, 5);
            const p6Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">Lola – My Lost and Found Love</h1>' +
                '<p>By Shambhavi Sharma</p>' +
                '</div></div>');
            $('#book').append(p6Title);
            p6Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            const p7Content = $('#publication-7').find('.article-post').html();
            const p7Parts = splitContentIntoBetterPages(p7Content, 5);

            const p7Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">Workforce and Education</h1>' +
                '<p>By Shambhavi Sharma</p>' +
                '</div></div>');
            $('#book').append(p7Title);
            p7Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            const p8Content = $('#publication-8').find('.article-post').html();
            const p8Parts = splitContentIntoBetterPages(p8Content, 8);
            const p8Title = $('<div class="page"><div class="page-content">' +
                '<h1 class="posttitle">Global Health: How Can We Improve Lives Everywhere?</h1>' +
                '</div></div>');
            $('#book').append(p8Title);
            p8Parts.forEach(part => {
                if (part && part.trim() !== '') {
                    const page = $('<div class="page"><div class="page-content">' + part + '</div></div>');
                    $('#book').append(page);
                } else {
                    const emptyPage = $('<div class="page"><div class="page-content"></div></div>');
                    $('#book').append(emptyPage);
                }
            });
            $('#book').append('<div class="hard"></div>');
            $('#book').append('<div class="hard cover-back"><h2>Thank You</h2><p>For Reading My Publications</p></div>');
        }
        function splitContentIntoPages(content, numPages) {
            const $content = $('<div>' + content + '</div>');
            const paragraphs = $content.find('p');
            const pages = [];
            if (paragraphs.length <= numPages) {
                return [content];
            }
            const paragraphsPerPage = Math.ceil(paragraphs.length / numPages);
            for (let i = 0; i < numPages; i++) {
                let pageContent = '';
                const startIdx = i * paragraphsPerPage;
                const endIdx = Math.min((i + 1) * paragraphsPerPage, paragraphs.length);

                for (let j = startIdx; j < endIdx; j++) {
                    pageContent += $('<div>').append($(paragraphs[j]).clone()).html();
                }
                pages.push(pageContent);
            }
            return pages;
        }
        function splitContentIntoBetterPages(content, numPages) {
            const $content = $('<div>' + content + '</div>');
            const elements = $content.children();
            const pages = [];
            if (elements.length <= numPages) {
                elements.each(function () {
                    pages.push($('<div>').append($(this).clone()).html());
                });
                while (pages.length < numPages) {
                    pages.push('');
                }
                return pages;
            }
            let totalLength = 0;
            elements.each(function () {
                totalLength += $(this).text().length;
            });
            const targetLengthPerPage = Math.ceil(totalLength / numPages);
            let currentPage = '';
            let currentPageLength = 0;
            elements.each(function () {
                const elementHtml = $('<div>').append($(this).clone()).html();
                const elementLength = $(this).text().length;
                if (currentPageLength > 0 && (currentPageLength + elementLength) > targetLengthPerPage && pages.length < numPages - 1) {
                    pages.push(currentPage);
                    currentPage = elementHtml;
                    currentPageLength = elementLength;
                } else {
                    currentPage += elementHtml;
                    currentPageLength += elementLength;
                }
            });
            if (currentPage.length > 0) {
                pages.push(currentPage);
            }
            while (pages.length < numPages) {
                pages.push('');
            }
            while (pages.length > numPages) {
                const lastPage = pages.pop();
                if (pages.length > 0) {
                    pages[pages.length - 1] += lastPage;
                } else {
                    pages.push(lastPage);
                    break;
                }
            }
            return pages;
        }
        function initializeBook() {
            createBookPages();
            if ($.isFunction($.fn.turn)) {
                $('#book').turn({
                    width: 800,
                    height: 600,
                    autoCenter: true,
                    gradients: true,
                    acceleration: true,
                    elevation: 50,
                    when: {
                        turning: function (e, page, view) {
                            if (page < 1) {
                                e.preventDefault();
                            }
                        },
                        turned: function (e, page, view) {
                            updateNavButtons();
                        }
                    }
                });
                updateNavButtons();
                resizeBook();
            } else {
                console.error('Turn.js library is not loaded correctly');
                $('#book-view-btn').removeClass('active');
                $('#list-view-btn').addClass('active');
                $('.book-view, .book-nav').hide();
                $('.list-view').show();
            }
        }

        function updateNavButtons() {
            const currentPage = $('#book').turn('page');
            const totalPages = $('#book').turn('pages');
            $('#prev-btn').prop('disabled', currentPage === 1);
            $('#next-btn').prop('disabled', currentPage === totalPages);
        }

        function resizeBook() {
            const width = $(window).width();
            if (width < 992) {
                const bookWidth = width < 676 ? '95vw' : '90vw';
                const bookHeight = width < 576 ? 'calc(95vw * 0.75)' : 'calc(90vw * 0.75)';
                $('#book').width(bookWidth).height(bookHeight);
            } else {
                $('#book').width(800).height(600);
            }
            if ($.isFunction($.fn.turn)) {
                $('#book').turn('size', $('#book').width(), $('#book').height());
            }
        }

        // Set list view as default initially
        $('#list-view-btn').addClass('active');
        $('#book-view-btn').removeClass('active');
        $('.book-view, .book-nav').hide();
        $('.list-view').show();
        $('.container1').hide();
        $('.back-to-list').hide();

        // Initialize book only when book view is selected
        $('#book-view-btn').on('click', function () {
            $(this).addClass('active');
            $('#list-view-btn').removeClass('active');

            // Initialize book if it hasn't been initialized yet
            if ($('#book').children().length === 0) {
                initializeBook();
            }

            $('.book-view, .book-nav').show();
            $('.list-view').hide();
            $('.container1').hide();
            $('.back-to-list').hide();
            resizeBook();
        });

        $('#list-view-btn').on('click', function () {
            $(this).addClass('active');
            $('#book-view-btn').removeClass('active');
            $('.book-view, .book-nav').hide();
            $('.list-view').show();
            $('.container1').hide();
            $('.back-to-list').hide();
        });

        $('#prev-btn').on('click', function () {
            $('#book').turn('previous');
        });

        $('#next-btn').on('click', function () {
            $('#book').turn('next');
        });

        $('.back-to-list').on('click', function () {
            $('.container1').hide();
            $('.back-to-list').hide();
            $('.list-view').show();
        });

        $(window).on('resize', function () {
            if ($('#book-view-btn').hasClass('active')) {
                resizeBook();
            }
        });

        $(document).on('click', '.toc-page li', function () {
            if ($('#book-view-btn').hasClass('active') && $('#book').children().length > 0) {
                const index = $(this).index() + 1;
                const pageNumber = 4 + (index * 2);
                $('#book').turn('page', pageNumber);
            }
        });
    });
});