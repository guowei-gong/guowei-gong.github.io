(() => {
  // <stdin>
  window.addComment = (function(v) {
    var I, C, h, E = v.document, b = { commentReplyClass: "comment-reply-link", commentReplyTitleId: "reply-title", cancelReplyId: "cancel-comment-reply-link", commentFormId: "commentform", temporaryFormId: "wp-temp-form-div", parentIdFieldId: "comment_parent", postIdFieldId: "comment_post_ID" }, e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver, r = "querySelector" in E && "addEventListener" in v, n = !!E.documentElement.dataset;
    function t() {
      d(), e && new e(o).observe(E.body, { childList: true, subtree: true });
    }
    function d(e2) {
      if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
        let t3 = function(e3) {
          if ((e3.metaKey || e3.ctrlKey) && 13 === e3.keyCode) return C.removeEventListener("keydown", t3), e3.preventDefault(), C.submit.click(), false;
        };
        var t2 = t3;
        I.addEventListener("touchstart", l), I.addEventListener("click", l);
        C && C.addEventListener("keydown", t3);
        for (var n2, d2 = (function(e3) {
          var t4 = b.commentReplyClass;
          e3 && e3.childNodes || (e3 = E);
          e3 = E.getElementsByClassName ? e3.getElementsByClassName(t4) : e3.querySelectorAll("." + t4);
          return e3;
        })(e2), o2 = 0, i = d2.length; o2 < i; o2++) (n2 = d2[o2]).addEventListener("touchstart", a), n2.addEventListener("click", a);
      }
    }
    function l(e2) {
      var t2, n2, d2 = g(b.temporaryFormId);
      d2 && h && (g(b.parentIdFieldId).value = "0", t2 = d2.textContent, d2.parentNode.replaceChild(h, d2), this.style.display = "none", n2 = (d2 = (d2 = g(b.commentReplyTitleId)) && d2.firstChild) && d2.nextSibling, d2 && d2.nodeType === Node.TEXT_NODE && t2 && (n2 && "A" === n2.nodeName && n2.id !== b.cancelReplyId && (n2.style.display = ""), d2.textContent = t2), e2.preventDefault());
    }
    function a(e2) {
      var t2 = g(b.commentReplyTitleId), t2 = t2 && t2.firstChild.textContent, n2 = this, d2 = m(n2, "belowelement"), o2 = m(n2, "commentid"), i = m(n2, "respondelement"), r2 = m(n2, "postid"), n2 = m(n2, "replyto") || t2;
      d2 && o2 && i && r2 && false === v.addComment.moveForm(d2, o2, i, r2, n2) && e2.preventDefault();
    }
    function o(e2) {
      for (var t2 = e2.length; t2--; ) if (e2[t2].addedNodes.length) return void d();
    }
    function m(e2, t2) {
      return n ? e2.dataset[t2] : e2.getAttribute("data-" + t2);
    }
    function g(e2) {
      return E.getElementById(e2);
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, false), { init: d, moveForm: function(e2, t2, n2, d2, o2) {
      var i, r2, l2, a2, m2, c, s, e2 = g(e2), n2 = (h = g(n2), g(b.parentIdFieldId)), y = g(b.postIdFieldId), p = g(b.commentReplyTitleId), u = (p = p && p.firstChild) && p.nextSibling;
      if (e2 && h && n2) {
        void 0 === o2 && (o2 = p && p.textContent), a2 = h, m2 = b.temporaryFormId, c = g(m2), s = (s = g(b.commentReplyTitleId)) ? s.firstChild.textContent : "", c || ((c = E.createElement("div")).id = m2, c.style.display = "none", c.textContent = s, a2.parentNode.insertBefore(c, a2)), d2 && y && (y.value = d2), n2.value = t2, I.style.display = "", e2.parentNode.insertBefore(h, e2.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o2), I.onclick = function() {
          return false;
        };
        try {
          for (var f = 0; f < C.elements.length; f++) if (i = C.elements[f], r2 = false, "getComputedStyle" in v ? l2 = v.getComputedStyle(i) : E.documentElement.currentStyle && (l2 = i.currentStyle), (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === l2.visibility) && (r2 = true), "hidden" !== i.type && !i.disabled && !r2) {
            i.focus();
            break;
          }
        } catch (e3) {
        }
        return false;
      }
    } };
  })(window);
})();
/*! This file is auto-generated */

;
(() => {
  // ns-hugo-imp:D:\Blog\guowei-gong.github.io\themes\puma\assets\ts\utils.ts
  var farallonHelper = class {
    getCookie(t) {
      if (0 < document.cookie.length) {
        var e = document.cookie.indexOf(t + "=");
        if (-1 != e) {
          e = e + t.length + 1;
          var n = document.cookie.indexOf(";", e);
          return -1 == n && (n = document.cookie.length), document.cookie.substring(e, n);
        }
      }
      return "";
    }
    setCookie(t, e, n) {
      var o = /* @__PURE__ */ new Date();
      o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
      var i = "expires=" + o.toUTCString();
      document.cookie = t + "=" + e + ";" + i + ";path=/";
    }
    showNotice(message, type = "success") {
      const html = `<div class="notice--wrapper">${message}</div>`;
      document.querySelector("body").insertAdjacentHTML("beforeend", html);
      document.querySelector(".notice--wrapper").classList.add("is-active");
      setTimeout(() => {
        document.querySelector(".notice--wrapper").remove();
      }, 3e3);
    }
  };

  // ns-hugo-imp:D:\Blog\guowei-gong.github.io\themes\puma\assets\ts\action.ts
  var farallonActions = class extends farallonHelper {
    singleSelector = ".pArticle";
    likeButtonSelctor = ".like-btn";
    articleSelector = ".pBlock--item";
    viewSelector = ".article--views";
    actionDomain;
    text = "";
    likeButton = null;
    post_id;
    is_single = false;
    constructor(config) {
      super();
      this.singleSelector = config.singleSelector ?? this.singleSelector;
      this.likeButtonSelctor = config.likeButtonSelctor ?? this.likeButtonSelctor;
      this.articleSelector = config.articleSelector ?? this.articleSelector;
      this.viewSelector = config.viewSelector ?? this.viewSelector;
      this.actionDomain = config.actionDomain;
      this.text = config.text ?? this.text;
      this.is_single = document.querySelector(this.singleSelector) ? true : false;
      if (this.is_single) {
        const postSingle = document.querySelector(
          this.singleSelector
        );
        this.post_id = postSingle.dataset.id ?? "";
        this.initArticleLike();
        this.initArticleView();
      } else {
        this.initArticlesView();
      }
    }
    initArticleView() {
      fetch(this.actionDomain + "post/" + this.post_id + "/view", {
        method: "post"
      }).then((res) => {
        res.json().then((data) => {
          if (document.querySelector(this.viewSelector)) {
            document.querySelector(this.viewSelector).innerText = data.views + this.text;
          }
        });
      });
    }
    initArticlesView() {
      const articles = Array.from(
        document.querySelectorAll(this.articleSelector)
      );
      if (articles.length === 0) return;
      let ids = [];
      articles.forEach((article) => {
        return ids.push(article.dataset.id);
      });
      const idsString = ids.join(",");
      fetch(this.actionDomain + "post/views?post_ids=" + idsString).then(
        (res) => {
          res.json().then((data) => {
            const result = data.results;
            articles.forEach((article) => {
              if (!article.querySelector(this.viewSelector)) return;
              article.querySelector(
                this.viewSelector
              ).innerText = (result.find(
                (item) => item.post_id == article.dataset.id
              ) ? result.find(
                (item) => item.post_id == article.dataset.id
              ).views : 0) + this.text;
            });
          });
        }
      );
    }
    initArticleLike() {
      this.likeButton = document.querySelector(this.likeButtonSelctor);
      if (this.likeButton) {
        fetch(this.actionDomain + "post/" + this.post_id + "/like").then(
          (res) => {
            res.json().then((data) => {
              this.likeButton.querySelector(
                ".count"
              ).innerText = data.likes;
            });
          }
        );
        this.likeButton.addEventListener("click", () => {
          this.handleLike();
        });
        if (this.getCookie("like_" + this.post_id)) {
          this.likeButton.classList.add("is-active");
        }
      }
    }
    handleLike() {
      if (this.getCookie("like_" + this.post_id)) {
        return this.showNotice("You have already liked this post");
      }
      if (this.likeButton) {
        const url = this.actionDomain + "post/" + this.post_id + "/like";
        fetch(url, {
          method: "post"
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.showNotice("Thanks for your like");
          const countElement = this.likeButton?.querySelector(
            ".count"
          );
          if (countElement) {
            countElement.innerText = data.likes;
          }
          this.setCookie("like_" + this.post_id, "1", 1);
        });
        this.likeButton?.classList.add("is-active");
      }
    }
  };
  var action_default = farallonActions;

  // ns-hugo-imp:D:\Blog\guowei-gong.github.io\themes\puma\assets\ts\db.ts
  var Douban = class {
    ver;
    type;
    finished;
    paged;
    genre_list;
    subjects;
    status;
    baseAPI;
    types;
    container;
    constructor(config) {
      this.container = config.container;
      this.types = config.types ?? [
        "movie",
        "book",
        "music",
        "game",
        "drama"
      ];
      this.baseAPI = config.baseAPI;
      this.ver = "1.0.6";
      this.type = "movie";
      this.status = "done";
      this.finished = false;
      this.paged = 1;
      this.genre_list = [
        {
          name: "\u5DF2\u770B",
          value: "done"
        },
        {
          name: "\u5728\u770B",
          value: "doing"
        },
        {
          name: "\u60F3\u770B",
          value: "mark"
        }
      ];
      this.subjects = [];
      this._create();
    }
    on(event, element, callback) {
      const nodeList = document.querySelectorAll(element);
      nodeList.forEach((item) => {
        item.addEventListener(event, callback);
      });
    }
    _handleGenreClick() {
      this.on("click", ".db--genreItem", (t) => {
        const self = t.currentTarget;
        if (self.classList.contains("is-active")) {
          return;
        }
        document.querySelector(".db--list").innerHTML = "";
        document.querySelector(".lds-ripple").classList.remove("u-hide");
        this.status = self.dataset.status || "";
        this._renderGenre();
        this.paged = 1;
        this.finished = false;
        this.subjects = [];
        this._fetchData();
      });
    }
    _reanderTypes() {
      document.querySelector(".db--nav").innerHTML = this.types.map((item) => {
        return `<span class="db--navItem JiEun${this.type == item ? " current" : ""}" data-type="${item}">${item}</span>`;
      }).join("");
      this._handleNavClick();
    }
    _renderGenre() {
      document.querySelector(".db--genres").innerHTML = this.genre_list.map((item) => {
        return `<span class="db--genreItem${this.status == item.value ? " is-active" : ""}" data-status="${item.value}">${item.name}</span>`;
      }).join("");
      this._handleGenreClick();
    }
    _fetchData() {
      const params = new URLSearchParams({
        paged: this.paged.toString(),
        type: this.type,
        status: this.status
      });
      fetch(this.baseAPI + "list?" + params.toString()).then((response) => response.json()).then((t) => {
        console.log(t.results);
        if (t.results.length) {
          if (document.querySelector(".db--list").classList.contains("db--list__card")) {
            this.subjects = [...this.subjects, ...t.results];
            this._randerDateTemplate();
          } else {
            this.subjects = [...this.subjects, ...t.results];
            this._randerListTemplate();
          }
          document.querySelector(".lds-ripple").classList.add("u-hide");
        } else {
          this.finished = true;
          document.querySelector(".lds-ripple").classList.add("u-hide");
        }
      });
    }
    _randerDateTemplate() {
      const result = this.subjects.reduce((result2, item) => {
        const date = new Date(item.create_time);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const key = `${year}-${month.toString().padStart(2, "0")}`;
        if (Object.prototype.hasOwnProperty.call(result2, key)) {
          result2[key].push(item);
        } else {
          result2[key] = [item];
        }
        return result2;
      }, {});
      let html = ``;
      for (let key in result) {
        const date = key.split("-");
        html += `<div class="db--listBydate"><div class="db--titleDate"><div class="db--titleDate__day">${date[1]}</div><div class="db--titleDate__month">${date[0]}</div></div><div class="db--dateList__card">`;
        html += result[key].map((movie) => {
          return `<div class="db--item${this.type == "music" ? " db--item__music" : ""}"><img src="${movie.poster}" referrerpolicy="no-referrer" class="db--image"><div class="db--score ">${movie.douban_score > 0 ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>' + movie.douban_score : ""}${movie.year > 0 ? " \xB7 " + movie.year : ""}</div><div class="db--title"><a href="${movie.link}" target="_blank">${movie.name}</a></div></div>`;
        }).join("");
        html += `</div></div>`;
      }
      document.querySelector(".db--list").innerHTML = html;
    }
    _randerListTemplate() {
      document.querySelector(".db--list").innerHTML = this.subjects.map((item) => {
        return `<div class="db--item"><img src="${item.poster}" referrerpolicy="no-referrer" class="db--image"><div class="ipc-signpost ">${item.create_time}</div><div class="db--score ">${item.douban_score ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>' + item.douban_score : ""}${item.year ? " \xB7 " + item.year : ""}</div><div class="db--title"><a href="${item.link}" target="_blank">${item.name}</a></div>
                </div>
                </div>`;
      }).join("");
    }
    _handleScroll() {
      window.addEventListener("scroll", () => {
        var t = window.scrollY || window.pageYOffset;
        const moreElement = document.querySelector(
          ".block-more"
        );
        if (moreElement.offsetTop + -window.innerHeight < t && document.querySelector(".lds-ripple").classList.contains("u-hide") && !this.finished) {
          document.querySelector(".lds-ripple").classList.remove("u-hide");
          this.paged++;
          this._fetchData();
        }
      });
    }
    _handleNavClick() {
      this.on("click", ".db--navItem", (t) => {
        const self = t.currentTarget;
        if (self.classList.contains("current")) return;
        this.status = "done";
        this.type = self.dataset.type;
        this._renderGenre();
        document.querySelector(".db--list").innerHTML = "";
        document.querySelector(".lds-ripple").classList.remove("u-hide");
        document.querySelector(".db--navItem.current").classList.remove("current");
        self.classList.add("current");
        this.paged = 1;
        this.finished = false;
        this.subjects = [];
        this._fetchData();
      });
    }
    _create() {
      if (document.querySelector(".db--container")) {
        const container = document.querySelector(
          this.container
        );
        if (!container) return;
        container.innerHTML = `<nav class="db--nav">
            </nav>
            <div class="db--genres">
            </div>
            <div class="db--list db--list__card">
            </div>
            <div class="block-more block-more__centered">
                <div class="lds-ripple">
                </div>
            </div>`;
        this._renderGenre();
        this._reanderTypes();
        this._fetchData();
        this._handleScroll();
      }
      if (document.querySelector(".js-db")) {
        document.querySelectorAll(".js-db").forEach((item) => {
          const db = item;
          const id = db.dataset.id;
          const type = db.dataset.type;
          const nodeParent = db.parentNode;
          fetch(this.baseAPI + `${type}/${id}`).then((response) => {
            response.json().then((t) => {
              if (t.data) {
                const data = t.data;
                const node = document.createElement("div");
                node.classList.add("doulist-item");
                node.innerHTML = `<div class="doulist-subject">
                            <div class="doulist-post"><img decoding="async" referrerpolicy="no-referrer" src="${data.poster}"></div>
                            <div class="doulist-content">
                            <div class="doulist-title"><a href="${data.link}" class="cute" target="_blank" rel="external nofollow">${data.name}</a></div>
                            <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:55%"></span></span><span class="rating_nums"> ${data.douban_score} </span></div>
                            <div class="abstract">${data.card_subtitle}</div>
                            </div>
                            </div>`;
                nodeParent.replaceWith(node);
              }
            });
          });
        });
      }
      if (document.querySelector(".db--collection")) {
        document.querySelectorAll(".db--collection").forEach((item) => {
          this._fetchCollection(item);
        });
      }
    }
    _fetchCollection(item) {
      const type = item.dataset.style ? item.dataset.style : "card";
      fetch(
        this.baseAPI + "/list?type=" + item.dataset.type + "&paged=1&start_time=" + item.dataset.start + "&end_time=" + item.dataset.end
      ).then((response) => response.json()).then((t) => {
        if (t.length) {
          if (type == "card") {
            item.innerHTML += t.map((movie) => {
              return `<div class="doulist-item">
                            <div class="doulist-subject">
                            <div class="db--viewTime ">Marked ${movie.create_time}</div>
                            <div class="doulist-post"><img referrerpolicy="no-referrer" src="${movie.poster}"></div><div class="doulist-content"><div class="doulist-title"><a href="${movie.link}" class="cute" target="_blank" rel="external nofollow">${movie.name}</a></div><div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${movie.douban_score}</span></div><div class="abstract">${movie.card_subtitle}</div></div></div></div>`;
            }).join("");
          } else {
            const result = t.reduce(
              (result2, item2) => {
                if (Object.prototype.hasOwnProperty.call(
                  result2,
                  item2.create_time
                )) {
                  result2[item2.create_time].push(item2);
                } else {
                  result2[item2.create_time] = [item2];
                }
                return result2;
              },
              {}
            );
            let html = ``;
            for (let key in result) {
              html += `<div class="db--date">${key}</div><div class="db--dateList">`;
              html += result[key].map((movie) => {
                return `<div class="db--card__list"">
                                    <img referrerpolicy="no-referrer" src="${movie.poster}">
                                    <div>
                                    <div class="title"><a href="${movie.link}" class="cute" target="_blank" rel="external nofollow">${movie.name}</a></div>
                                    <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${movie.douban_score}</span></div>
                                    ${movie.remark || movie.card_subtitle}
                                    </div>
                                    </div>`;
              }).join("");
              html += `</div>`;
            }
            item.innerHTML = html;
          }
        }
      });
    }
  };
  var db_default = Douban;

  // ns-hugo-imp:D:\Blog\guowei-gong.github.io\themes\puma\assets\ts\comment.ts
  var farallonComment = class extends farallonHelper {
    loading = false;
    post_id = "";
    total = 0;
    total_paged = 1;
    paged = 1;
    actionDomain;
    postSelector;
    dateFormater;
    constructor(config) {
      super();
      this.postSelector = config.postSelector || ".pComment--area";
      if (!document.querySelector(this.postSelector)) return;
      this.actionDomain = config.actionDomain;
      this.post_id = document.querySelector(this.postSelector).dataset.id;
      this.fetchComments();
      this.init();
    }
    renderComment(item, children = "", reply = true) {
      const replyHtml = reply ? `<div class="reply"><span class="comment-reply-link u-cursorPointer" onclick="return addComment.moveForm('comment-${item.comment_id}', '${item.comment_id}', 'respond', '${document.querySelector(this.postSelector).dataset.id}')">\u56DE\u590D</span></div>                            ` : "";
      return `<li class="pComment--item parent" itemtype="http://schema.org/Comment" data-id="${item.comment_id}" itemscope="" itemprop="comment" id="comment-${item.comment_id}">
                            <div class="pComment--body">
                                <div class="pComment--meta">
                                        <img src="${item.avatar}" class="avatar" width=42 height=42 alt="${item.comment_author_name}" />
                                    <span class="pComment--author">${item.comment_author_name}</span>
                                    </div>
                                <div class="pComment--content" itemprop="description">
                                    ${item.comment_content}
                                </div>
                                ${replyHtml}
                                <footer class="pComment--footer">
                                <div class="pComment--time" itemprop="datePublished" datetime="${item.comment_date}">${item.comment_date}</div>
                                </footer>
                            </div>
                            ${children}
                </li>`;
    }
    async fetchComments() {
      fetch(
        this.actionDomain + "comment/list?paged=" + this.paged + "&post_id=" + this.post_id
      ).then((res) => {
        res.json().then((data) => {
          const comments = data.results;
          this.total = data.total;
          this.total_paged = data.total_paged;
          if (this.total_paged > 1) {
            this.randerNav();
          }
          document.querySelector(
            ".pComment--heroTitle .count"
          ).innerHTML = this.total.toString();
          if (this.total == 0) {
            document.querySelector(
              ".pComment--list"
            ).innerHTML = `<div class="no--comment">${window.noComment}</div>`;
            return;
          } else {
            const html = comments.map((item) => {
              let children = "";
              if (item.children) {
                children = `<ol class="children">${item.children.map((i) => {
                  return this.renderComment(i);
                }).join("")}</ol>`;
              }
              return this.renderComment(item, children);
            }).join("");
            document.querySelector(".pComment--list").innerHTML = html;
          }
        });
      });
    }
    randerNav() {
      const nextDisabled = this.paged == 1 ? "disabled" : "";
      const preDisabled = this.paged == this.total_paged ? "disabled" : "";
      const html = `<span class="cnav-item ${preDisabled}" data-action="pre">
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z" fill-rule="evenodd">
        </path></svg> Older Comments</span><span class="chartPage-verticalDivider"></span><span class="cnav-item ${nextDisabled}" data-action="next">Newer Comments
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fill-rule="evenodd">
        </path></svg>
        </span>`;
      document.querySelector(".commentnav").innerHTML = html;
      document.querySelectorAll(".cnav-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          if (item.classList.contains("disabled")) return;
          const action = item.attributes["data-action"].value;
          if (action == "pre") {
            this.paged += 1;
          } else {
            this.paged -= 1;
          }
          this.fetchComments();
        });
      });
    }
    init() {
      if (document.querySelector(".comment-form")) {
        if (this.getCookie("comment_author") != "") {
          document.querySelector("#author").value = this.getCookie("comment_author");
        }
        if (this.getCookie("comment_author_email") != "") {
          document.querySelector("#email").value = this.getCookie("comment_author_email");
        }
        if (this.getCookie("comment_author_url") != "") {
          document.querySelector("#url").value = this.getCookie("comment_author_url");
        }
        document.querySelector(".comment-form")?.addEventListener("submit", (e) => {
          e.preventDefault();
          if (this.loading) return;
          const form = document.querySelector(
            ".comment-form"
          );
          const formData = new FormData(form);
          const formDataObj = {};
          formData.forEach(
            (value, key) => formDataObj[key] = value
          );
          formDataObj["post_id"] = this.post_id;
          this.loading = true;
          fetch(this.actionDomain + "comment/insert", {
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: {
              "Content-Type": "application/json"
            }
          }).then((response) => {
            return response.json();
          }).then((data) => {
            this.loading = false;
            if (data.status != 200) {
              return this.showNotice(data.err, "error");
            }
            let cancelBtn = document.getElementById(
              "cancel-comment-reply-link"
            );
            let respondForm = document.getElementById("respond");
            let tempForm = document.getElementById("wp-temp-form-div");
            const comment = data.data;
            const html = this.renderComment(comment, "", false);
            const parent_id = document.querySelector(
              "#comment_parent"
            )?.value;
            cancelBtn.style.display = "none", // @ts-ignore
            cancelBtn.onclick = null, // @ts-ignore
            document.getElementById(
              "comment_parent"
            ).value = "", tempForm && // @ts-ignore
            respondForm && // @ts-ignore
            tempForm.parentNode && (tempForm.parentNode.insertBefore(
              respondForm,
              tempForm
            ), tempForm.parentNode.removeChild(tempForm));
            if (document.querySelector(".comment-body__fresh"))
              document.querySelector(".comment-body__fresh")?.classList.remove("comment-body__fresh");
            document.getElementById("comment").value = "";
            if (parent_id != "") {
              document.querySelector(
                // @ts-ignore
                "#comment-" + parent_id
              )?.insertAdjacentHTML(
                "beforeend",
                '<ol class="children">' + html + "</ol>"
              );
            } else {
              if (document.querySelector(".no--comment")) {
                document.querySelector(".no--comment")?.remove();
              }
              document.querySelector(".pComment--list")?.insertAdjacentHTML("beforeend", html);
            }
            const newComment = document.querySelector(
              `#comment-${comment.comment_id}`
            );
            if (newComment) {
              newComment.scrollIntoView({
                behavior: "smooth"
              });
            }
            this.setCookie(
              "comment_author",
              document.querySelector(
                "#author"
              ).value,
              1
            );
            this.setCookie(
              "comment_author_email",
              document.querySelector(
                "#email"
              ).value,
              1
            );
            this.setCookie(
              "comment_author_url",
              document.querySelector(
                "#url"
              ).value,
              1
            );
            this.showNotice("\u8BC4\u8BBA\u6210\u529F");
          });
        });
      }
    }
  };

  // ns-hugo-imp:D:\Blog\guowei-gong.github.io\themes\puma\assets\ts\zoom.ts
  var imgZoom = class {
    selector;
    selectorAttr;
    currentIndex;
    images;
    constructor() {
      this.selector = ".grap--figure";
      this.selectorAttr = "src";
      this.currentIndex = 0;
      this.images = [];
      this.getZoomImages();
      window.addEventListener("resize", () => {
        if (document.querySelector(".overlay")) {
          this.loadImage(this.images[this.currentIndex]);
        }
      });
    }
    getZoomImages() {
      const images = Array.from(document.querySelectorAll(this.selector));
      this.images = [...images].map(
        (image) => image.querySelector("img")?.getAttribute(this.selectorAttr)
      ).filter((url) => url !== null);
      images.forEach((image) => {
        image.addEventListener("click", (e) => {
          e.preventDefault();
          const url = image.querySelector("img")?.getAttribute(this.selectorAttr);
          this.showOverlay(url);
        });
      });
    }
    renderNav() {
      const nav = `${this.currentIndex + 1}/${this.images.length}`;
      const imageNav = document.querySelector(".image--nav");
      if (imageNav) {
        imageNav.innerHTML = nav;
      }
    }
    prevImage() {
      if (this.currentIndex === 0) {
        return;
      }
      this.currentIndex = this.currentIndex - 1;
      this.loadImage(this.images[this.currentIndex]);
      this.renderNav();
    }
    nextImage() {
      if (this.currentIndex === this.images.length - 1) {
        return;
      }
      this.currentIndex = this.currentIndex + 1;
      this.loadImage(this.images[this.currentIndex]);
      this.renderNav();
    }
    showOverlay(url) {
      const self = this;
      let currentIndex = this.images.indexOf(url);
      this.currentIndex = currentIndex;
      let nav = this.images.length > 1 ? `<div class="image--nav">${currentIndex + 1}/${this.images.length}</div><button title="Prev" type="button" class="mfp-arrow mfp-arrow-left mfp-prevent-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M14.4998 7.80903C14.4742 7.74825 14.4372 7.69292 14.3908 7.64603L8.68084 1.93803C8.58696 1.84427 8.45967 1.79165 8.32699 1.79175C8.19431 1.79184 8.0671 1.84464 7.97334 1.93853C7.87959 2.03241 7.82697 2.1597 7.82707 2.29238C7.82716 2.42506 7.87996 2.55227 7.97384 2.64603L12.8278 7.50003H1.96484C1.83224 7.50003 1.70506 7.5527 1.61129 7.64647C1.51752 7.74024 1.46484 7.86742 1.46484 8.00003C1.46484 8.13263 1.51752 8.25981 1.61129 8.35358C1.70506 8.44735 1.83224 8.50003 1.96484 8.50003H12.8278L7.97384 13.354C7.87996 13.4478 7.82716 13.575 7.82707 13.7077C7.82697 13.8404 7.87959 13.9676 7.97334 14.0615C8.0671 14.1554 8.19431 14.2082 8.32699 14.2083C8.45967 14.2084 8.58696 14.1558 8.68084 14.062L14.3878 8.35403C14.4342 8.30713 14.4712 8.2518 14.4968 8.19103C14.5478 8.069 14.5489 7.93184 14.4998 7.80903Z"></path>
        </svg></button><button title="Next (Right arrow key)" type="button" class="mfp-arrow mfp-arrow-right mfp-prevent-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M14.4998 7.80903C14.4742 7.74825 14.4372 7.69292 14.3908 7.64603L8.68084 1.93803C8.58696 1.84427 8.45967 1.79165 8.32699 1.79175C8.19431 1.79184 8.0671 1.84464 7.97334 1.93853C7.87959 2.03241 7.82697 2.1597 7.82707 2.29238C7.82716 2.42506 7.87996 2.55227 7.97384 2.64603L12.8278 7.50003H1.96484C1.83224 7.50003 1.70506 7.5527 1.61129 7.64647C1.51752 7.74024 1.46484 7.86742 1.46484 8.00003C1.46484 8.13263 1.51752 8.25981 1.61129 8.35358C1.70506 8.44735 1.83224 8.50003 1.96484 8.50003H12.8278L7.97384 13.354C7.87996 13.4478 7.82716 13.575 7.82707 13.7077C7.82697 13.8404 7.87959 13.9676 7.97334 14.0615C8.0671 14.1554 8.19431 14.2082 8.32699 14.2083C8.45967 14.2084 8.58696 14.1558 8.68084 14.062L14.3878 8.35403C14.4342 8.30713 14.4712 8.2518 14.4968 8.19103C14.5478 8.069 14.5489 7.93184 14.4998 7.80903Z"></path>
        </svg></button>` : "";
      let html = `<div class="overlay"><button class="zoomImgClose"><svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" class="q"><path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"/></svg></button><div class="overlay-img-wrap"><img class="overlay-image"><div class="lds-ripple"></div></div>${nav}</div>`;
      const body = document.querySelector("body");
      if (body) {
        body.insertAdjacentHTML("beforeend", html);
        body.classList.add("u-overflowYHidden");
      }
      this.loadImage(url);
      document.querySelector(".zoomImgClose")?.addEventListener("click", () => {
        self.overlayRemove();
      });
      document.querySelector(".mfp-arrow-right")?.addEventListener("click", () => {
        self.nextImage();
      });
      document.querySelector(".mfp-arrow-left")?.addEventListener("click", () => {
        self.prevImage();
      });
    }
    loadImage(o) {
      let s = new Image();
      const loading = document.querySelector(".lds-ripple");
      if (loading) {
        loading.style.display = "inline-block";
      }
      const i = document.querySelector(".overlay-image");
      const nav = document.querySelector(".image--nav");
      nav?.classList.add("u-hide");
      i.style.display = "none";
      s.onload = () => {
        var t = s.width, e = s.height, n = window.innerHeight - 140, a = window.innerWidth - 80;
        a < t ? (e *= a / t, t = a, n < e && (t *= n / e, e = n)) : n < e && (t *= n / e, e = n, a < t && (e *= a / t, t = a));
        i.setAttribute("src", o), i.style.width = t + "px", i.style.height = e + "px", i.style.display = "block", nav?.classList.remove("u-hide");
        document.querySelector(".overlay-img-wrap")?.classList.add("is-finieshed");
        loading.style.display = "none";
      };
      s.src = o;
    }
    overlayRemove() {
      this._remove(document.querySelector(".overlay"));
      const body = document.querySelector("body");
      if (body) {
        body.classList.remove("u-overflowYHidden");
      }
    }
    _remove(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
  };
  var zoom_default = imgZoom;

  // <stdin>
  var pumaBase = class {
    constructor() {
      this.initThemeSwitch();
      this.initBack2Top();
      console.log("Theme by bigfa, version is 0.2.1");
    }
    initThemeSwitch() {
      const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "auto";
      const html = `<div class="fixed--theme">
<span class="${theme == "dark" ? "is-active" : ""}" data-action-value="dark">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
    style="color: currentcolor; width: 16px; height: 16px;">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
</svg>
</span>
<span class="${theme == "light" ? "is-active" : ""}" data-action-value="light">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
    style="color: currentcolor; width: 16px; height: 16px;">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2"></path>
    <path d="M12 21v2"></path>
    <path d="M4.22 4.22l1.42 1.42"></path>
    <path d="M18.36 18.36l1.42 1.42"></path>
    <path d="M1 12h2"></path>
    <path d="M21 12h2"></path>
    <path d="M4.22 19.78l1.42-1.42"></path>
    <path d="M18.36 5.64l1.42-1.42"></path>
</svg>
</span>
<span class="${theme == "auto" ? "is-active" : ""}"  data-action-value="auto">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
    style="color: currentcolor; width: 16px; height: 16px;">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M8 21h8"></path>
    <path d="M12 17v4"></path>
</svg>
</span>
</div>`;
      document.querySelector("body").insertAdjacentHTML("beforeend", html);
      document.querySelectorAll(".fixed--theme span").forEach((item) => {
        item.addEventListener("click", () => {
          if (item.classList.contains("is-active")) return;
          document.querySelectorAll(".fixed--theme span").forEach((item2) => {
            item2.classList.remove("is-active");
          });
          if (item.dataset.actionValue == "dark") {
            localStorage.setItem("theme", "dark");
            document.querySelector("body").classList.remove("auto");
            document.querySelector("body").classList.add("dark");
            item.classList.add("is-active");
          } else if (item.dataset.actionValue == "light") {
            localStorage.setItem("theme", "light");
            document.querySelector("body").classList.remove("auto");
            document.querySelector("body").classList.remove("dark");
            item.classList.add("is-active");
          } else if (item.dataset.actionValue == "auto") {
            localStorage.setItem("theme", "auto");
            document.querySelector("body").classList.remove("dark");
            document.querySelector("body").classList.add("auto");
            item.classList.add("is-active");
          }
        });
      });
    }
    initBack2Top() {
      if (document.querySelector(".backToTop")) {
        const backToTop = document.querySelector(
          ".backToTop"
        );
        window.addEventListener("scroll", () => {
          const t = window.scrollY || document.documentElement.scrollTop;
          t > 200 ? backToTop.classList.add("is-active") : backToTop.classList.remove("is-active");
        });
        backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    }
  };
  new pumaBase();
  if (window.actionDomain) {
    new action_default({
      singleSelector: ".pArticle",
      articleSelector: ".pBlock--item",
      text: window.viewText,
      actionDomain: window.actionDomain
    });
  }
  new db_default({
    baseAPI: window.dbAPIBase,
    container: ".db--container"
  });
  if (window.actionDomain) {
    new farallonComment({
      actionDomain: window.actionDomain
    });
  }
  if (window.zoom) {
    new zoom_default();
  }
})();

;
(() => {
  // ns-hugo-imp:D:\Blog\guowei-gong.github.io\themes\puma\assets\ts\utils.ts
  var farallonHelper = class {
    getCookie(t) {
      if (0 < document.cookie.length) {
        var e = document.cookie.indexOf(t + "=");
        if (-1 != e) {
          e = e + t.length + 1;
          var n = document.cookie.indexOf(";", e);
          return -1 == n && (n = document.cookie.length), document.cookie.substring(e, n);
        }
      }
      return "";
    }
    setCookie(t, e, n) {
      var o = /* @__PURE__ */ new Date();
      o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
      var i = "expires=" + o.toUTCString();
      document.cookie = t + "=" + e + ";" + i + ";path=/";
    }
    showNotice(message, type = "success") {
      const html = `<div class="notice--wrapper">${message}</div>`;
      document.querySelector("body").insertAdjacentHTML("beforeend", html);
      document.querySelector(".notice--wrapper").classList.add("is-active");
      setTimeout(() => {
        document.querySelector(".notice--wrapper").remove();
      }, 3e3);
    }
  };

  // <stdin>
  var farallonComment = class extends farallonHelper {
    loading = false;
    post_id = "";
    total = 0;
    total_paged = 1;
    paged = 1;
    actionDomain;
    postSelector;
    dateFormater;
    constructor(config) {
      super();
      this.postSelector = config.postSelector || ".pComment--area";
      if (!document.querySelector(this.postSelector)) return;
      this.actionDomain = config.actionDomain;
      this.post_id = document.querySelector(this.postSelector).dataset.id;
      this.fetchComments();
      this.init();
    }
    renderComment(item, children = "", reply = true) {
      const replyHtml = reply ? `<div class="reply"><span class="comment-reply-link u-cursorPointer" onclick="return addComment.moveForm('comment-${item.comment_id}', '${item.comment_id}', 'respond', '${document.querySelector(this.postSelector).dataset.id}')">\u56DE\u590D</span></div>                            ` : "";
      return `<li class="pComment--item parent" itemtype="http://schema.org/Comment" data-id="${item.comment_id}" itemscope="" itemprop="comment" id="comment-${item.comment_id}">
                            <div class="pComment--body">
                                <div class="pComment--meta">
                                        <img src="${item.avatar}" class="avatar" width=42 height=42 alt="${item.comment_author_name}" />
                                    <span class="pComment--author">${item.comment_author_name}</span>
                                    </div>
                                <div class="pComment--content" itemprop="description">
                                    ${item.comment_content}
                                </div>
                                ${replyHtml}
                                <footer class="pComment--footer">
                                <div class="pComment--time" itemprop="datePublished" datetime="${item.comment_date}">${item.comment_date}</div>
                                </footer>
                            </div>
                            ${children}
                </li>`;
    }
    async fetchComments() {
      fetch(
        this.actionDomain + "comment/list?paged=" + this.paged + "&post_id=" + this.post_id
      ).then((res) => {
        res.json().then((data) => {
          const comments = data.results;
          this.total = data.total;
          this.total_paged = data.total_paged;
          if (this.total_paged > 1) {
            this.randerNav();
          }
          document.querySelector(
            ".pComment--heroTitle .count"
          ).innerHTML = this.total.toString();
          if (this.total == 0) {
            document.querySelector(
              ".pComment--list"
            ).innerHTML = `<div class="no--comment">${window.noComment}</div>`;
            return;
          } else {
            const html = comments.map((item) => {
              let children = "";
              if (item.children) {
                children = `<ol class="children">${item.children.map((i) => {
                  return this.renderComment(i);
                }).join("")}</ol>`;
              }
              return this.renderComment(item, children);
            }).join("");
            document.querySelector(".pComment--list").innerHTML = html;
          }
        });
      });
    }
    randerNav() {
      const nextDisabled = this.paged == 1 ? "disabled" : "";
      const preDisabled = this.paged == this.total_paged ? "disabled" : "";
      const html = `<span class="cnav-item ${preDisabled}" data-action="pre">
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z" fill-rule="evenodd">
        </path></svg> Older Comments</span><span class="chartPage-verticalDivider"></span><span class="cnav-item ${nextDisabled}" data-action="next">Newer Comments
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fill-rule="evenodd">
        </path></svg>
        </span>`;
      document.querySelector(".commentnav").innerHTML = html;
      document.querySelectorAll(".cnav-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          if (item.classList.contains("disabled")) return;
          const action = item.attributes["data-action"].value;
          if (action == "pre") {
            this.paged += 1;
          } else {
            this.paged -= 1;
          }
          this.fetchComments();
        });
      });
    }
    init() {
      if (document.querySelector(".comment-form")) {
        if (this.getCookie("comment_author") != "") {
          document.querySelector("#author").value = this.getCookie("comment_author");
        }
        if (this.getCookie("comment_author_email") != "") {
          document.querySelector("#email").value = this.getCookie("comment_author_email");
        }
        if (this.getCookie("comment_author_url") != "") {
          document.querySelector("#url").value = this.getCookie("comment_author_url");
        }
        document.querySelector(".comment-form")?.addEventListener("submit", (e) => {
          e.preventDefault();
          if (this.loading) return;
          const form = document.querySelector(
            ".comment-form"
          );
          const formData = new FormData(form);
          const formDataObj = {};
          formData.forEach(
            (value, key) => formDataObj[key] = value
          );
          formDataObj["post_id"] = this.post_id;
          this.loading = true;
          fetch(this.actionDomain + "comment/insert", {
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: {
              "Content-Type": "application/json"
            }
          }).then((response) => {
            return response.json();
          }).then((data) => {
            this.loading = false;
            if (data.status != 200) {
              return this.showNotice(data.err, "error");
            }
            let cancelBtn = document.getElementById(
              "cancel-comment-reply-link"
            );
            let respondForm = document.getElementById("respond");
            let tempForm = document.getElementById("wp-temp-form-div");
            const comment = data.data;
            const html = this.renderComment(comment, "", false);
            const parent_id = document.querySelector(
              "#comment_parent"
            )?.value;
            cancelBtn.style.display = "none", // @ts-ignore
            cancelBtn.onclick = null, // @ts-ignore
            document.getElementById(
              "comment_parent"
            ).value = "", tempForm && // @ts-ignore
            respondForm && // @ts-ignore
            tempForm.parentNode && (tempForm.parentNode.insertBefore(
              respondForm,
              tempForm
            ), tempForm.parentNode.removeChild(tempForm));
            if (document.querySelector(".comment-body__fresh"))
              document.querySelector(".comment-body__fresh")?.classList.remove("comment-body__fresh");
            document.getElementById("comment").value = "";
            if (parent_id != "") {
              document.querySelector(
                // @ts-ignore
                "#comment-" + parent_id
              )?.insertAdjacentHTML(
                "beforeend",
                '<ol class="children">' + html + "</ol>"
              );
            } else {
              if (document.querySelector(".no--comment")) {
                document.querySelector(".no--comment")?.remove();
              }
              document.querySelector(".pComment--list")?.insertAdjacentHTML("beforeend", html);
            }
            const newComment = document.querySelector(
              `#comment-${comment.comment_id}`
            );
            if (newComment) {
              newComment.scrollIntoView({
                behavior: "smooth"
              });
            }
            this.setCookie(
              "comment_author",
              document.querySelector(
                "#author"
              ).value,
              1
            );
            this.setCookie(
              "comment_author_email",
              document.querySelector(
                "#email"
              ).value,
              1
            );
            this.setCookie(
              "comment_author_url",
              document.querySelector(
                "#url"
              ).value,
              1
            );
            this.showNotice("\u8BC4\u8BBA\u6210\u529F");
          });
        });
      }
    }
  };
})();
