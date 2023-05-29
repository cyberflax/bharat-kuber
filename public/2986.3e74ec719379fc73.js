"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [2986], {
        2986: (M, v, a) => {
            a.r(v), a.d(v, {
                ClientModule: () => u
            });
            var _ = a(6895),
                p = a(4153),
                T = a(249),
                f = a(2054),
                r = a(7392),
                n = a(4859),
                s = a(7009),
                l = a(9549),
                R = a(3848),
                C = a(6205),
                h = a(9602),
                x = a(4385),
                D = a(6709),
                b = a(4144),
                O = a(266),
                J = a(1948),
                j = a(1991),
                y = a(9132),
                t = a(4650),
                q = a(1299);
            const L = ["chart"],
                w = function() {
                    return ["Home"]
                },
                d = function() {
                    return ["/admin/accounts/invoice"]
                };
            class g {
                constructor() {}
                ngOnInit() {
                    this.chart1(), this.chart2(), this.chart3(), this.chart4()
                }
                chart1() {
                    this.areaChartOptions = {
                        series: [{
                            name: "New Clients",
                            data: [31, 40, 28, 51, 42, 85, 77]
                        }, {
                            name: "Old Clients",
                            data: [11, 32, 45, 32, 34, 52, 41]
                        }],
                        chart: {
                            height: 350,
                            type: "area",
                            toolbar: {
                                show: !1
                            },
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#7D4988", "#66BB6A"],
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            type: "datetime",
                            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                        },
                        legend: {
                            show: !0,
                            position: "top",
                            horizontalAlign: "center",
                            offsetX: 0,
                            offsetY: 0
                        },
                        tooltip: {
                            x: {
                                format: "dd/MM/yy HH:mm"
                            }
                        }
                    }
                }
                chart2() {
                    this.radialChartOptions = {
                        series: [44, 55, 67],
                        chart: {
                            height: 265,
                            type: "radialBar"
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: "22px"
                                    },
                                    value: {
                                        fontSize: "16px"
                                    },
                                    total: {
                                        show: !0,
                                        label: "Total",
                                        formatter: function() {
                                            return "249"
                                        }
                                    }
                                }
                            }
                        },
                        colors: ["#ffc107", "#3f51b5", "#8bc34a"],
                        labels: ["Face TO Face", "E-Consult", "Available"]
                    }
                }
                chart3() {
                    this.restRateChartOptions = {
                        series: [{
                            name: "Hours",
                            data: [69, 75, 72, 69, 75, 66, 80]
                        }],
                        chart: {
                            height: 365,
                            type: "line",
                            dropShadow: {
                                enabled: !0,
                                color: "#000",
                                top: 18,
                                left: 7,
                                blur: 10,
                                opacity: .2
                            },
                            foreColor: "#9aa0ac",
                            toolbar: {
                                show: !1
                            }
                        },
                        colors: ["#6777EF"],
                        dataLabels: {
                            enabled: !0
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        markers: {
                            size: 1
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
                        },
                        xaxis: {
                            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                            title: {
                                text: "Months"
                            }
                        },
                        yaxis: {
                            title: {
                                text: "Hours"
                            }
                        },
                        tooltip: {
                            theme: "dark",
                            marker: {
                                show: !0
                            },
                            x: {
                                show: !0
                            }
                        }
                    }
                }
                chart4() {
                    this.performanceRateChartOptions = {
                        series: [{
                            name: "Hours",
                            data: [113, 120, 130, 120, 125, 119, 126]
                        }],
                        chart: {
                            height: 365,
                            type: "line",
                            dropShadow: {
                                enabled: !0,
                                color: "#000",
                                top: 18,
                                left: 7,
                                blur: 10,
                                opacity: .2
                            },
                            foreColor: "#9aa0ac",
                            toolbar: {
                                show: !1
                            }
                        },
                        colors: ["#976DA0"],
                        dataLabels: {
                            enabled: !0
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        markers: {
                            size: 1
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
                        },
                        xaxis: {
                            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                            title: {
                                text: "Months"
                            }
                        },
                        yaxis: {
                            title: {
                                text: "Hours"
                            }
                        },
                        tooltip: {
                            theme: "dark",
                            marker: {
                                show: !0
                            },
                            x: {
                                show: !0
                            }
                        }
                    }
                }
            }
            g.\u0275fac = function(i) {
                return new(i || g)
            }, g.\u0275cmp = t.Xpm({
                type: g,
                selectors: [
                    ["app-dashboard"]
                ],
                viewQuery: function(i, e) {
                    if (1 & i && t.Gf(L, 5), 2 & i) {
                        let U;
                        t.iGM(U = t.CRH()) && (e.chart = U.first)
                    }
                },
                decls: 365,
                vars: 42,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-lg-12"],
                    [1, "card"],
                    [1, "body"],
                    [1, "row", "align-items-center"],
                    [1, "col-md-4"],
                    ["src", "assets/images/pages/welcome.png", "alt", "", 1, "w-100"],
                    [1, "col-md-8"],
                    [1, "font-20", "weight-500", "mb-2"],
                    [1, "weight-600", "font-30", "col-blue", "pt-1"],
                    [1, "font-18", "max-width-600"],
                    [1, "col-lg-3", "col-md-3", "col-sm-12"],
                    [1, "card", "card-statistic-2"],
                    [1, "clearfix"],
                    [1, "card-icon-only", "shadow-primary", "float-start"],
                    ["src", "assets/images/pages/img1.png", "alt", ""],
                    [1, "card-right"],
                    [1, "float-end"],
                    [1, "col-green"],
                    [1, "font-weight-bold", "float-end", "mb-0"],
                    [1, "card-content", "msl-4", "mb-3"],
                    [1, "m-b-0", "d-flex"],
                    [1, "material-icons", "col-green", "psr-2"],
                    ["src", "assets/images/pages/img2.png", "alt", ""],
                    [1, "material-icons", "col-orange", "psr-2"],
                    ["src", "assets/images/pages/img3.png", "alt", ""],
                    ["src", "assets/images/pages/img4.png", "alt", ""],
                    [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"],
                    [1, "card-body"],
                    [1, "float-start"],
                    [1, "text-muted"],
                    [1, "text-muted", "font-12"],
                    [1, "mb-5"],
                    [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "tooltip", "title"],
                    [1, "header"],
                    [1, "col-sm-12"],
                    [1, "d-flex", "justify-content-between", "mt-2", "text-dark", "mb-2"],
                    [1, "fw-bold"],
                    [1, "progress", "traffic-bar", "mb-2"],
                    [1, "progress-bar", "bg-red", 2, "width", "33%"],
                    [1, "progress-bar", "bg-blue", 2, "width", "25%"],
                    [1, "progress-bar", "bg-amber", 2, "width", "12%"],
                    [1, "progress-bar", "bg-purple", 2, "width", "10%"],
                    [1, "progress-bar", "bg-green", 2, "width", "7%"],
                    [1, "progress-bar", "bg-cyan", 2, "width", "13%"],
                    [1, "search-traffic"],
                    [1, "d-flex", "justify-content-between", "mb-1", "mt-2"],
                    [1, "d-flex", "justify-content-between", "traffic-source"],
                    [1, "fa", "fa-circle", "col-red", "msr-2"],
                    [1, "fa", "fa-circle", "col-blue", "msr-2"],
                    [1, "fa", "fa-circle", "col-amber", "msr-2"],
                    [1, "fa", "fa-circle", "col-purple", "msr-2"],
                    [1, "fa", "fa-circle", "col-green", "msr-2"],
                    [1, "fa", "fa-circle", "col-cyan", "msr-2"],
                    [1, "row", "clearfix"],
                    [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"],
                    [1, "tableBody"],
                    [1, "responsive_table"],
                    [1, "table", "table-hover"],
                    [3, "routerLink"],
                    ["src", "assets/images/user/user1.jpg", "alt", "", 1, "user_img"],
                    [1, "badge", "badge-solid-green"],
                    ["src", "assets/images/user/user2.jpg", "alt", "", 1, "user_img"],
                    [1, "badge", "badge-solid-red"],
                    ["src", "assets/images/user/user3.jpg", "alt", "", 1, "user_img"],
                    [1, "badge", "badge-solid-orange"],
                    ["src", "assets/images/user/user4.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user5.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user6.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user7.jpg", "alt", "", 1, "user_img"],
                    [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"],
                    [1, "review-block"],
                    [1, "review-img"],
                    ["src", "assets/images/user/user1.jpg", "alt", ""],
                    [1, "col"],
                    [1, "m-b-0", "m-t-5"],
                    [1, "float-end", "m-r-10", "text-muted"],
                    [1, "material-icons"],
                    [1, "m-t-10", "m-b-15", "text-muted"],
                    ["href", "#!"],
                    [1, "material-icons", "m-r-10"],
                    [1, "material-icons", "m-r-10", "col-red"],
                    ["src", "assets/images/user/user2.jpg", "alt", ""],
                    [1, "text-center", "m-b-5"],
                    ["href", "#!", 1, "b-b-primary", "text-primary"]
                ],
                template: function(i, e) {
                    1 & i && (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), t._UZ(3, "app-breadcrumb", 3), t.qZA(), t.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9), t._UZ(10, "img", 10), t.qZA(), t.TgZ(11, "div", 11)(12, "h4", 12), t._uU(13, " Welcome back "), t.TgZ(14, "div", 13), t._uU(15, "Cara Stevens!"), t.qZA()(), t.TgZ(16, "p", 14), t._uU(17, "We would like to take this opportunity to welcome you to our practice and to thank you for choosing our company. Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida.."), t.qZA()()()()()()(), t.TgZ(18, "div", 4)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "div", 18), t._UZ(23, "img", 19), t.qZA(), t.TgZ(24, "div", 20)(25, "div")(26, "h5", 21), t._uU(27, "Running Projects"), t.qZA()(), t.TgZ(28, "div", 22)(29, "h3", 23), t._uU(30, "70"), t.qZA()()()(), t.TgZ(31, "div", 24)(32, "p", 25)(33, "i", 26), t._uU(34, "trending_up"), t.qZA(), t._uU(35, " 10% Higher Then Last Month "), t.qZA()()()(), t.TgZ(36, "div", 15)(37, "div", 16)(38, "div", 17)(39, "div", 18), t._UZ(40, "img", 27), t.qZA(), t.TgZ(41, "div", 20)(42, "div")(43, "h5", 21), t._uU(44, "Active Tickets"), t.qZA()(), t.TgZ(45, "div", 22)(46, "h3", 23), t._uU(47, "650"), t.qZA()()()(), t.TgZ(48, "div", 24)(49, "p", 25)(50, "i", 28), t._uU(51, "trending_down"), t.qZA(), t._uU(52, " 07% Less Then Last Month "), t.qZA()()()(), t.TgZ(53, "div", 15)(54, "div", 16)(55, "div", 17)(56, "div", 18), t._UZ(57, "img", 29), t.qZA(), t.TgZ(58, "div", 20)(59, "div")(60, "h5", 21), t._uU(61, "Assigned Employee"), t.qZA()(), t.TgZ(62, "div", 22)(63, "h3", 23), t._uU(64, "885"), t.qZA()()()(), t.TgZ(65, "div", 24)(66, "p", 25)(67, "i", 26), t._uU(68, "trending_up"), t.qZA(), t._uU(69, " 12% Higher Then Last Month "), t.qZA()()()(), t.TgZ(70, "div", 15)(71, "div", 16)(72, "div", 17)(73, "div", 18), t._UZ(74, "img", 30), t.qZA(), t.TgZ(75, "div", 20)(76, "div")(77, "h5", 21), t._uU(78, "Total Payments"), t.qZA()(), t.TgZ(79, "div", 22)(80, "h3", 23), t._uU(81, "$9,456"), t.qZA()()()(), t.TgZ(82, "div", 24)(83, "p", 25)(84, "i", 28), t._uU(85, "trending_down"), t.qZA(), t._uU(86, " 22% Less Then Last Month "), t.qZA()()()()(), t.TgZ(87, "div", 4)(88, "div", 31)(89, "div", 6)(90, "div", 32)(91, "div", 33)(92, "h6", 34), t._uU(93, "Project Hourly Work"), t.qZA(), t.TgZ(94, "h5"), t._uU(95, "My Shop App "), t.TgZ(96, "span", 35), t._uU(97, "(Android)"), t.qZA()()(), t.TgZ(98, "div", 36), t._UZ(99, "apx-chart", 37), t.qZA()()()(), t.TgZ(100, "div", 31)(101, "div", 6)(102, "div", 32)(103, "div", 33)(104, "h6", 34), t._uU(105, "Project Hourly Work"), t.qZA(), t.TgZ(106, "h5"), t._uU(107, "ERP System "), t.TgZ(108, "span", 35), t._uU(109, "(Java)"), t.qZA()()(), t.TgZ(110, "div", 36), t._UZ(111, "apx-chart", 37), t.qZA()()()(), t.TgZ(112, "div", 31)(113, "div", 6)(114, "div", 38)(115, "h2"), t._uU(116, "Project Hours details"), t.qZA()(), t.TgZ(117, "div", 7)(118, "div", 4)(119, "div", 39)(120, "div", 40)(121, "div")(122, "span", 41), t._uU(123, "3487"), t.qZA(), t._uU(124, " Hours"), t.qZA(), t.TgZ(125, "div"), t._uU(126, "Expected: 10000"), t.qZA()(), t.TgZ(127, "div", 42), t._UZ(128, "div", 43)(129, "div", 44)(130, "div", 45)(131, "div", 46)(132, "div", 47)(133, "div", 48), t.qZA()(), t.TgZ(134, "div", 39)(135, "div", 49)(136, "div", 50)(137, "div", 41), t._uU(138, "Project Name"), t.qZA(), t.TgZ(139, "div", 41), t._uU(140, "Completed"), t.qZA()(), t.TgZ(141, "div", 51)(142, "div")(143, "span"), t._UZ(144, "i", 52), t.qZA(), t._uU(145, "Angular website"), t.qZA(), t.TgZ(146, "div"), t._uU(147, "33%"), t.qZA()(), t.TgZ(148, "div", 51)(149, "div")(150, "span"), t._UZ(151, "i", 53), t.qZA(), t._uU(152, "Shopping App"), t.qZA(), t.TgZ(153, "div"), t._uU(154, "25%"), t.qZA()(), t.TgZ(155, "div", 51)(156, "div")(157, "span"), t._UZ(158, "i", 54), t.qZA(), t._uU(159, "ERP system"), t.qZA(), t.TgZ(160, "div"), t._uU(161, "12%"), t.qZA()(), t.TgZ(162, "div", 51)(163, "div")(164, "span"), t._UZ(165, "i", 55), t.qZA(), t._uU(166, "React admin panel"), t.qZA(), t.TgZ(167, "div"), t._uU(168, "10%"), t.qZA()(), t.TgZ(169, "div", 51)(170, "div")(171, "span"), t._UZ(172, "i", 56), t.qZA(), t._uU(173, "Api Integration"), t.qZA(), t.TgZ(174, "div"), t._uU(175, "7%"), t.qZA()(), t.TgZ(176, "div", 51)(177, "div")(178, "span"), t._UZ(179, "i", 57), t.qZA(), t._uU(180, "Email Marketing"), t.qZA(), t.TgZ(181, "div"), t._uU(182, "13%"), t.qZA()()()()()()()()(), t.TgZ(183, "div", 58)(184, "div", 59)(185, "div", 6)(186, "div", 38)(187, "h2"), t._uU(188, "Invoices"), t.qZA()(), t.TgZ(189, "div", 60)(190, "div", 61)(191, "table", 62)(192, "thead")(193, "tr")(194, "th"), t._uU(195, "Invoice No"), t.qZA(), t.TgZ(196, "th"), t._uU(197, "Generated By"), t.qZA(), t.TgZ(198, "th"), t._uU(199, "Due Date"), t.qZA(), t.TgZ(200, "th"), t._uU(201, "Status"), t.qZA(), t.TgZ(202, "th"), t._uU(203, "Total "), t.qZA()()(), t.TgZ(204, "tbody")(205, "tr")(206, "td")(207, "a", 63), t._uU(208, " #IN7865 "), t.qZA()(), t.TgZ(209, "td"), t._UZ(210, "img", 64), t._uU(211, "John Doe"), t.qZA(), t.TgZ(212, "td"), t._uU(213, "12/05/2016 "), t.qZA(), t.TgZ(214, "td")(215, "div", 65), t._uU(216, "Paid"), t.qZA()(), t.TgZ(217, "td"), t._uU(218, " $500 "), t.qZA()(), t.TgZ(219, "tr")(220, "td")(221, "a", 63), t._uU(222, " #IN2301 "), t.qZA()(), t.TgZ(223, "td"), t._UZ(224, "img", 66), t._uU(225, "Sarah Smith"), t.qZA(), t.TgZ(226, "td"), t._uU(227, "31/03/2016 "), t.qZA(), t.TgZ(228, "td")(229, "div", 67), t._uU(230, "Unpaid"), t.qZA()(), t.TgZ(231, "td"), t._uU(232, " $372 "), t.qZA()(), t.TgZ(233, "tr")(234, "td")(235, "a", 63), t._uU(236, " #IN7239 "), t.qZA()(), t.TgZ(237, "td"), t._UZ(238, "img", 68), t._uU(239, "Airi Satou"), t.qZA(), t.TgZ(240, "td"), t._uU(241, "14/04/2017 "), t.qZA(), t.TgZ(242, "td")(243, "div", 69), t._uU(244, "Partially Paid"), t.qZA()(), t.TgZ(245, "td"), t._uU(246, " $1038 "), t.qZA()(), t.TgZ(247, "tr")(248, "td")(249, "a", 63), t._uU(250, " #IN1482 "), t.qZA()(), t.TgZ(251, "td"), t._UZ(252, "img", 70), t._uU(253, "Angelica Ramos"), t.qZA(), t.TgZ(254, "td"), t._uU(255, "11/08/2017 "), t.qZA(), t.TgZ(256, "td")(257, "div", 65), t._uU(258, "Paid"), t.qZA()(), t.TgZ(259, "td"), t._uU(260, " $872 "), t.qZA()(), t.TgZ(261, "tr")(262, "td")(263, "a", 63), t._uU(264, " #IN8526 "), t.qZA()(), t.TgZ(265, "td"), t._UZ(266, "img", 71), t._uU(267, "Ashton Cox"), t.qZA(), t.TgZ(268, "td"), t._uU(269, "15/02/2018 "), t.qZA(), t.TgZ(270, "td")(271, "div", 67), t._uU(272, "Unpaid"), t.qZA()(), t.TgZ(273, "td"), t._uU(274, " $2398 "), t.qZA()(), t.TgZ(275, "tr")(276, "td")(277, "a", 63), t._uU(278, " #IN2473 "), t.qZA()(), t.TgZ(279, "td"), t._UZ(280, "img", 72), t._uU(281, "Cara Stevens"), t.qZA(), t.TgZ(282, "td"), t._uU(283, "28/01/2017 "), t.qZA(), t.TgZ(284, "td")(285, "div", 65), t._uU(286, "Paid"), t.qZA()(), t.TgZ(287, "td"), t._uU(288, " $834 "), t.qZA()(), t.TgZ(289, "tr")(290, "td")(291, "a", 63), t._uU(292, " #IN7366 "), t.qZA()(), t.TgZ(293, "td"), t._UZ(294, "img", 73), t._uU(295, "Jacob Ryan"), t.qZA(), t.TgZ(296, "td"), t._uU(297, "11/03/2017 "), t.qZA(), t.TgZ(298, "td")(299, "div", 69), t._uU(300, "Partially Paid"), t.qZA()(), t.TgZ(301, "td"), t._uU(302, " $147 "), t.qZA()()()()()()()(), t.TgZ(303, "div", 74)(304, "div", 6)(305, "div", 38)(306, "h2"), t._uU(307, "Customer Review"), t.qZA()(), t.TgZ(308, "div", 7)(309, "div", 75)(310, "div", 4)(311, "div", 76), t._UZ(312, "img", 77), t.qZA(), t.TgZ(313, "div", 78)(314, "h6", 79), t._uU(315, "Alis Smith "), t.TgZ(316, "span", 80), t._uU(317, " a week ago"), t.qZA()(), t.TgZ(318, "i", 81), t._uU(319, "star"), t.qZA(), t.TgZ(320, "i", 81), t._uU(321, "star"), t.qZA(), t.TgZ(322, "i", 81), t._uU(323, "star"), t.qZA(), t.TgZ(324, "i", 81), t._uU(325, "star_half"), t.qZA(), t.TgZ(326, "i", 81), t._uU(327, "star_border"), t.qZA(), t.TgZ(328, "p", 82), t._uU(329, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum."), t.qZA(), t.TgZ(330, "a", 83)(331, "i", 84), t._uU(332, "thumb_up"), t.qZA()(), t.TgZ(333, "a", 83)(334, "i", 85), t._uU(335, "thumb_down"), t.qZA()()()(), t.TgZ(336, "div", 4)(337, "div", 76), t._UZ(338, "img", 86), t.qZA(), t.TgZ(339, "div", 78)(340, "h6", 79), t._uU(341, "John Dio "), t.TgZ(342, "span", 80), t._uU(343, " a week ago"), t.qZA()(), t.TgZ(344, "i", 81), t._uU(345, "star"), t.qZA(), t.TgZ(346, "i", 81), t._uU(347, "star_half"), t.qZA(), t.TgZ(348, "i", 81), t._uU(349, "star_border"), t.qZA(), t.TgZ(350, "i", 81), t._uU(351, "star_border"), t.qZA(), t.TgZ(352, "i", 81), t._uU(353, "star_border"), t.qZA(), t.TgZ(354, "p", 82), t._uU(355, "Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet."), t.qZA(), t.TgZ(356, "a", 83)(357, "i", 84), t._uU(358, "thumb_up"), t.qZA()(), t.TgZ(359, "a", 83)(360, "i", 85), t._uU(361, "thumb_down"), t.qZA()()()(), t.TgZ(362, "div", 87)(363, "a", 88), t._uU(364, "View all Customer Reviews"), t.qZA()()()()()()()()()), 2 & i && (t.xp6(3), t.Q6J("title", "Dashboard")("items", t.DdM(34, w))("active_item", "Dashboard"), t.xp6(96), t.Q6J("series", e.restRateChartOptions.series)("chart", e.restRateChartOptions.chart)("xaxis", e.restRateChartOptions.xaxis)("stroke", e.restRateChartOptions.stroke)("colors", e.restRateChartOptions.colors)("dataLabels", e.restRateChartOptions.dataLabels)("legend", e.restRateChartOptions.legend)("markers", e.restRateChartOptions.markers)("grid", e.restRateChartOptions.grid)("yaxis", e.restRateChartOptions.yaxis)("tooltip", e.restRateChartOptions.tooltip)("title", e.restRateChartOptions.title), t.xp6(12), t.Q6J("series", e.performanceRateChartOptions.series)("chart", e.performanceRateChartOptions.chart)("xaxis", e.performanceRateChartOptions.xaxis)("stroke", e.performanceRateChartOptions.stroke)("colors", e.performanceRateChartOptions.colors)("dataLabels", e.performanceRateChartOptions.dataLabels)("legend", e.performanceRateChartOptions.legend)("markers", e.performanceRateChartOptions.markers)("grid", e.performanceRateChartOptions.grid)("yaxis", e.performanceRateChartOptions.yaxis)("tooltip", e.performanceRateChartOptions.tooltip)("title", e.performanceRateChartOptions.title), t.xp6(96), t.Q6J("routerLink", t.DdM(35, d)), t.xp6(14), t.Q6J("routerLink", t.DdM(36, d)), t.xp6(14), t.Q6J("routerLink", t.DdM(37, d)), t.xp6(14), t.Q6J("routerLink", t.DdM(38, d)), t.xp6(14), t.Q6J("routerLink", t.DdM(39, d)), t.xp6(14), t.Q6J("routerLink", t.DdM(40, d)), t.xp6(14), t.Q6J("routerLink", t.DdM(41, d)))
                },
                dependencies: [y.rH, C.x, q.L]
            });
            const S = function() {
                return ["Home"]
            };
            class m {
                constructor() {}
            }
            m.\u0275fac = function(i) {
                return new(i || m)
            }, m.\u0275cmp = t.Xpm({
                type: m,
                selectors: [
                    ["app-billing"]
                ],
                decls: 241,
                vars: 4,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row", "clearfix"],
                    [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"],
                    [1, "card"],
                    [1, "header"],
                    [1, "body"],
                    [1, "card-body"],
                    [1, "responsive_table"],
                    [1, "table", "table-hover"],
                    ["href", "mailto:test@gmail.com"],
                    ["mat-icon-button", ""],
                    [1, "col-purple"],
                    [1, "col-green"],
                    [1, "col-blue"]
                ],
                template: function(i, e) {
                    1 & i && (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), t._UZ(3, "app-breadcrumb", 3), t.qZA(), t.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2"), t._uU(9, "Billing"), t.qZA()(), t.TgZ(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "table", 11)(14, "thead")(15, "tr")(16, "th"), t._uU(17, "Invoice No"), t.qZA(), t.TgZ(18, "th"), t._uU(19, "Employee Name"), t.qZA(), t.TgZ(20, "th"), t._uU(21, "Date"), t.qZA(), t.TgZ(22, "th"), t._uU(23, "Amount"), t.qZA(), t.TgZ(24, "th"), t._uU(25, "Tax"), t.qZA(), t.TgZ(26, "th"), t._uU(27, "Discount"), t.qZA(), t.TgZ(28, "th"), t._uU(29, "Total"), t.qZA(), t.TgZ(30, "th"), t._uU(31, "Actions "), t.qZA()()(), t.TgZ(32, "tbody")(33, "tr")(34, "td"), t._uU(35, "#A348"), t.qZA(), t.TgZ(36, "td")(37, "a", 12), t._uU(38, " Dr.Jacob Ryan "), t.qZA()(), t.TgZ(39, "td"), t._uU(40, "04/03/2016 "), t.qZA(), t.TgZ(41, "td"), t._uU(42, "$40"), t.qZA(), t.TgZ(43, "td"), t._uU(44, "10%"), t.qZA(), t.TgZ(45, "td"), t._uU(46, "$5"), t.qZA(), t.TgZ(47, "td"), t._uU(48, "$39"), t.qZA(), t.TgZ(49, "td")(50, "button", 13)(51, "mat-icon", 14), t._uU(52, "cloud_download"), t.qZA()(), t.TgZ(53, "button", 13)(54, "mat-icon", 15), t._uU(55, "visibility"), t.qZA()(), t.TgZ(56, "button", 13)(57, "mat-icon", 16), t._uU(58, "print"), t.qZA()()()(), t.TgZ(59, "tr")(60, "td"), t._uU(61, "#A645"), t.qZA(), t.TgZ(62, "td")(63, "a", 12), t._uU(64, " Dr.Rajesh "), t.qZA()(), t.TgZ(65, "td"), t._uU(66, "11/04/2016 "), t.qZA(), t.TgZ(67, "td"), t._uU(68, "$25"), t.qZA(), t.TgZ(69, "td"), t._uU(70, "10%"), t.qZA(), t.TgZ(71, "td"), t._uU(72, "$5"), t.qZA(), t.TgZ(73, "td"), t._uU(74, "$22"), t.qZA(), t.TgZ(75, "td")(76, "button", 13)(77, "mat-icon", 14), t._uU(78, "cloud_download"), t.qZA()(), t.TgZ(79, "button", 13)(80, "mat-icon", 15), t._uU(81, "visibility"), t.qZA()(), t.TgZ(82, "button", 13)(83, "mat-icon", 16), t._uU(84, "print"), t.qZA()()()(), t.TgZ(85, "tr")(86, "td"), t._uU(87, "#A873"), t.qZA(), t.TgZ(88, "td")(89, "a", 12), t._uU(90, " Dr.Jay Soni "), t.qZA()(), t.TgZ(91, "td"), t._uU(92, "18/04/2016 "), t.qZA(), t.TgZ(93, "td"), t._uU(94, "$50"), t.qZA(), t.TgZ(95, "td"), t._uU(96, "10%"), t.qZA(), t.TgZ(97, "td"), t._uU(98, "$5"), t.qZA(), t.TgZ(99, "td"), t._uU(100, "$47"), t.qZA(), t.TgZ(101, "td")(102, "button", 13)(103, "mat-icon", 14), t._uU(104, "cloud_download"), t.qZA()(), t.TgZ(105, "button", 13)(106, "mat-icon", 15), t._uU(107, "visibility"), t.qZA()(), t.TgZ(108, "button", 13)(109, "mat-icon", 16), t._uU(110, "print"), t.qZA()()()(), t.TgZ(111, "tr")(112, "td"), t._uU(113, "#A927"), t.qZA(), t.TgZ(114, "td")(115, "a", 12), t._uU(116, " Dr.John Deo "), t.qZA()(), t.TgZ(117, "td"), t._uU(118, "22/05/2016 "), t.qZA(), t.TgZ(119, "td"), t._uU(120, "$45"), t.qZA(), t.TgZ(121, "td"), t._uU(122, "10%"), t.qZA(), t.TgZ(123, "td"), t._uU(124, "$5"), t.qZA(), t.TgZ(125, "td"), t._uU(126, "$42"), t.qZA(), t.TgZ(127, "td")(128, "button", 13)(129, "mat-icon", 14), t._uU(130, "cloud_download"), t.qZA()(), t.TgZ(131, "button", 13)(132, "mat-icon", 15), t._uU(133, "visibility"), t.qZA()(), t.TgZ(134, "button", 13)(135, "mat-icon", 16), t._uU(136, "print"), t.qZA()()()(), t.TgZ(137, "tr")(138, "td"), t._uU(139, "#A228"), t.qZA(), t.TgZ(140, "td")(141, "a", 12), t._uU(142, " Dr.Megha Trivedi "), t.qZA()(), t.TgZ(143, "td"), t._uU(144, "09/07/2016 "), t.qZA(), t.TgZ(145, "td"), t._uU(146, "$62"), t.qZA(), t.TgZ(147, "td"), t._uU(148, "10%"), t.qZA(), t.TgZ(149, "td"), t._uU(150, "$5"), t.qZA(), t.TgZ(151, "td"), t._uU(152, "$57"), t.qZA(), t.TgZ(153, "td")(154, "button", 13)(155, "mat-icon", 14), t._uU(156, "cloud_download"), t.qZA()(), t.TgZ(157, "button", 13)(158, "mat-icon", 15), t._uU(159, "visibility"), t.qZA()(), t.TgZ(160, "button", 13)(161, "mat-icon", 16), t._uU(162, "print"), t.qZA()()()(), t.TgZ(163, "tr")(164, "td"), t._uU(165, "#A345"), t.qZA(), t.TgZ(166, "td")(167, "a", 12), t._uU(168, " Dr.Sarah Smith "), t.qZA()(), t.TgZ(169, "td"), t._uU(170, "14/07/2016 "), t.qZA(), t.TgZ(171, "td"), t._uU(172, "$60"), t.qZA(), t.TgZ(173, "td"), t._uU(174, "10%"), t.qZA(), t.TgZ(175, "td"), t._uU(176, "$5"), t.qZA(), t.TgZ(177, "td"), t._uU(178, "$56"), t.qZA(), t.TgZ(179, "td")(180, "button", 13)(181, "mat-icon", 14), t._uU(182, "cloud_download"), t.qZA()(), t.TgZ(183, "button", 13)(184, "mat-icon", 15), t._uU(185, "visibility"), t.qZA()(), t.TgZ(186, "button", 13)(187, "mat-icon", 16), t._uU(188, "print"), t.qZA()()()(), t.TgZ(189, "tr")(190, "td"), t._uU(191, "#A765"), t.qZA(), t.TgZ(192, "td")(193, "a", 12), t._uU(194, " Dr.Jacob Ryan "), t.qZA()(), t.TgZ(195, "td"), t._uU(196, "22/06/2016 "), t.qZA(), t.TgZ(197, "td"), t._uU(198, "$40"), t.qZA(), t.TgZ(199, "td"), t._uU(200, "10%"), t.qZA(), t.TgZ(201, "td"), t._uU(202, "$5"), t.qZA(), t.TgZ(203, "td"), t._uU(204, "$39"), t.qZA(), t.TgZ(205, "td")(206, "button", 13)(207, "mat-icon", 14), t._uU(208, "cloud_download"), t.qZA()(), t.TgZ(209, "button", 13)(210, "mat-icon", 15), t._uU(211, "visibility"), t.qZA()(), t.TgZ(212, "button", 13)(213, "mat-icon", 16), t._uU(214, "print"), t.qZA()()()(), t.TgZ(215, "tr")(216, "td"), t._uU(217, "#A125"), t.qZA(), t.TgZ(218, "td")(219, "a", 12), t._uU(220, " Dr.Rajesh "), t.qZA()(), t.TgZ(221, "td"), t._uU(222, "23/06/2016 "), t.qZA(), t.TgZ(223, "td"), t._uU(224, "$30"), t.qZA(), t.TgZ(225, "td"), t._uU(226, "10%"), t.qZA(), t.TgZ(227, "td"), t._uU(228, "$5"), t.qZA(), t.TgZ(229, "td"), t._uU(230, "$29"), t.qZA(), t.TgZ(231, "td")(232, "button", 13)(233, "mat-icon", 14), t._uU(234, "cloud_download"), t.qZA()(), t.TgZ(235, "button", 13)(236, "mat-icon", 15), t._uU(237, "visibility"), t.qZA()(), t.TgZ(238, "button", 13)(239, "mat-icon", 16), t._uU(240, "print"), t.qZA()()()()()()()()()()()()()()), 2 & i && (t.xp6(3), t.Q6J("title", "Billing")("items", t.DdM(3, S))("active_item", "Billing"))
                },
                dependencies: [r.Hw, n.RK, q.L]
            });
            var P = a(3238);
            const $ = function() {
                return ["Home"]
            };
            class c {
                constructor() {}
            }
            c.\u0275fac = function(i) {
                return new(i || c)
            }, c.\u0275cmp = t.Xpm({
                type: c,
                selectors: [
                    ["app-settings"]
                ],
                decls: 110,
                vars: 14,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "card"],
                    [1, "header"],
                    [1, "body"],
                    [1, "example-container"],
                    ["appearance", "outline", 1, "example-full-width", "mb-3"],
                    ["matInput", ""],
                    ["matInput", "", "type", "password"],
                    ["mat-raised-button", "", "color", "primary"],
                    [1, "row", "clearfix"],
                    [1, "col-lg-6", "col-md-12"],
                    [1, "form-group"],
                    [1, "col-lg-4", "col-md-12"],
                    ["matInput", "", 3, "matDatepicker"],
                    ["matSuffix", "", 3, "for"],
                    ["picker", ""],
                    [3, "value"],
                    [1, "col-md-12"]
                ],
                template: function(i, e) {
                    if (1 & i && (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), t._UZ(3, "app-breadcrumb", 3), t.qZA(), t.TgZ(4, "div", 4)(5, "div", 5)(6, "h2")(7, "strong"), t._uU(8, "Security"), t.qZA(), t._uU(9, " Settings"), t.qZA()(), t.TgZ(10, "div", 6)(11, "div", 7)(12, "mat-form-field", 8)(13, "mat-label"), t._uU(14, "Username"), t.qZA(), t._UZ(15, "input", 9), t.qZA(), t.TgZ(16, "mat-form-field", 8)(17, "mat-label"), t._uU(18, "Current Password"), t.qZA(), t._UZ(19, "input", 10), t.qZA(), t.TgZ(20, "mat-form-field", 8)(21, "mat-label"), t._uU(22, "New Password"), t.qZA(), t._UZ(23, "input", 10), t.qZA()(), t.TgZ(24, "button", 11), t._uU(25, "Save"), t.qZA()()(), t.TgZ(26, "div", 4)(27, "div", 5)(28, "h2")(29, "strong"), t._uU(30, "Account"), t.qZA(), t._uU(31, " Settings"), t.qZA()(), t.TgZ(32, "div", 6)(33, "div", 12)(34, "div", 13)(35, "div", 14)(36, "mat-form-field", 8)(37, "mat-label"), t._uU(38, "First Name"), t.qZA(), t._UZ(39, "input", 9), t.qZA()()(), t.TgZ(40, "div", 13)(41, "div", 14)(42, "mat-form-field", 8)(43, "mat-label"), t._uU(44, "Last Name"), t.qZA(), t._UZ(45, "input", 9), t.qZA()()(), t.TgZ(46, "div", 15)(47, "div", 14)(48, "mat-form-field", 8)(49, "mat-label"), t._uU(50, "City"), t.qZA(), t._UZ(51, "input", 9), t.qZA()()(), t.TgZ(52, "div", 15)(53, "div", 14)(54, "mat-form-field", 8)(55, "mat-label"), t._uU(56, "Email"), t.qZA(), t._UZ(57, "input", 9), t.qZA()()(), t.TgZ(58, "div", 15)(59, "div", 14)(60, "mat-form-field", 8)(61, "mat-label"), t._uU(62, "Country"), t.qZA(), t._UZ(63, "input", 9), t.qZA()()(), t.TgZ(64, "div", 15)(65, "div", 14)(66, "mat-form-field", 8)(67, "mat-label"), t._uU(68, "Date Of Birth"), t.qZA(), t._UZ(69, "input", 16)(70, "mat-datepicker-toggle", 17)(71, "mat-datepicker", null, 18), t.qZA()()(), t.TgZ(73, "div", 15)(74, "div", 14)(75, "mat-form-field", 8)(76, "mat-label"), t._uU(77, "Mobile"), t.qZA(), t._UZ(78, "input", 9), t.qZA()()(), t.TgZ(79, "div", 15)(80, "div", 14)(81, "mat-form-field", 8)(82, "mat-label"), t._uU(83, "Blood Group"), t.qZA(), t.TgZ(84, "mat-select")(85, "mat-option", 19), t._uU(86, " A- "), t.qZA(), t.TgZ(87, "mat-option", 19), t._uU(88, " A+ "), t.qZA(), t.TgZ(89, "mat-option", 19), t._uU(90, " B- "), t.qZA(), t.TgZ(91, "mat-option", 19), t._uU(92, " B+ "), t.qZA(), t.TgZ(93, "mat-option", 19), t._uU(94, " AB- "), t.qZA(), t.TgZ(95, "mat-option", 19), t._uU(96, " AB+ "), t.qZA(), t.TgZ(97, "mat-option", 19), t._uU(98, " O- "), t.qZA(), t.TgZ(99, "mat-option", 19), t._uU(100, " O+ "), t.qZA()()()()(), t.TgZ(101, "div", 20)(102, "div", 14)(103, "mat-form-field", 8)(104, "mat-label"), t._uU(105, "Address"), t.qZA(), t._UZ(106, "textarea", 9), t.qZA()()(), t.TgZ(107, "div", 20)(108, "button", 11), t._uU(109, "Save Changes"), t.qZA()()()()()()()), 2 & i) {
                        const U = t.MAs(72);
                        t.xp6(3), t.Q6J("title", "Settings")("items", t.DdM(13, $))("active_item", "Settings"), t.xp6(66), t.Q6J("matDatepicker", U), t.xp6(1), t.Q6J("for", U), t.xp6(15), t.Q6J("value", "A-"), t.xp6(2), t.Q6J("value", "A+"), t.xp6(2), t.Q6J("value", "B-"), t.xp6(2), t.Q6J("value", "B+"), t.xp6(2), t.Q6J("value", "AB-"), t.xp6(2), t.Q6J("value", "AB+"), t.xp6(2), t.Q6J("value", "O-"), t.xp6(2), t.Q6J("value", "O+")
                    }
                },
                dependencies: [n.lW, l.KE, l.hX, l.R9, h.Mq, h.hl, h.nW, x.gD, P.ey, b.Nt, q.L]
            });
            var B = a(4006);
            const k = function() {
                return ["Home"]
            };
            class A {
                constructor() {
                    this.hideRequiredControl = new B.p4(!1)
                }
            }
            A.\u0275fac = function(i) {
                return new(i || A)
            }, A.\u0275cmp = t.Xpm({
                type: A,
                selectors: [
                    ["app-chat"]
                ],
                decls: 186,
                vars: 5,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"],
                    [1, "card"],
                    [1, "body"],
                    ["id", "plist", 1, "people-list"],
                    [1, "form-line", "m-b-15"],
                    ["type", "text", "placeholder", "Search...", 1, "form-control"],
                    [1, "tab-content"],
                    ["visibility", "hover", 2, "height", "590px"],
                    ["id", "chat_user"],
                    [1, "chat-list", "list-unstyled", "m-b-0"],
                    [1, "clearfix", "active"],
                    ["src", "assets/images/user/user1.jpg", "alt", "avatar"],
                    [1, "about"],
                    [1, "name"],
                    [1, "status"],
                    [1, "material-icons", "offline"],
                    [1, "clearfix"],
                    ["src", "assets/images/user/user2.jpg", "alt", "avatar"],
                    ["src", "assets/images/user/user3.jpg", "alt", "avatar"],
                    [1, "material-icons", "online"],
                    ["src", "assets/images/user/user4.jpg", "alt", "avatar"],
                    ["src", "assets/images/user/user5.jpg", "alt", "avatar"],
                    ["src", "assets/images/user/user6.jpg", "alt", "avatar"],
                    ["src", "assets/images/user/user7.jpg", "alt", "avatar"],
                    ["src", "assets/images/user/user8.jpg", "alt", "avatar"],
                    ["src", "assets/images/user/user9.jpg", "alt", "avatar"],
                    [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"],
                    [1, "chat"],
                    [1, "chat-header", "clearfix"],
                    [1, "chat-about"],
                    [1, "chat-with"],
                    [1, "chat-num-messages"],
                    ["visibility", "hover", 2, "height", "450px"],
                    ["id", "chat-conversation", 1, "chat-history"],
                    [1, "message-data", "text-end"],
                    [1, "message-data-time"],
                    [1, "message-data-name"],
                    [1, "message", "other-message", "float-end"],
                    [1, "message-data"],
                    [1, "message", "my-message"],
                    [1, "chat-message", "clearfix"],
                    [1, "form-group"],
                    [1, "form-line"],
                    ["appearance", "outline", 1, "example-full-width", 3, "hideRequiredMarker"],
                    ["matInput", "", "placeholder", "Enter text here..", "required", ""],
                    [1, "chat-upload"],
                    ["mat-mini-fab", "", 1, "bg-deep-orange", "msr-2"],
                    [1, "material-icons"],
                    ["mat-mini-fab", "", 1, "bg-deep-orange"]
                ],
                template: function(i, e) {
                    1 & i && (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), t._UZ(3, "app-breadcrumb", 3), t.qZA(), t.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9), t._UZ(10, "input", 10), t.qZA(), t.TgZ(11, "div", 11)(12, "ng-scrollbar", 12)(13, "div", 13)(14, "ul", 14)(15, "li", 15), t._UZ(16, "img", 16), t.TgZ(17, "div", 17)(18, "div", 18), t._uU(19, "William Smith"), t.qZA(), t.TgZ(20, "div", 19)(21, "i", 20), t._uU(22, "fiber_manual_record"), t.qZA(), t._uU(23, " left 7 mins ago "), t.qZA()()(), t.TgZ(24, "li", 21), t._UZ(25, "img", 22), t.TgZ(26, "div", 17)(27, "div", 18), t._uU(28, "Martha Williams"), t.qZA(), t.TgZ(29, "div", 19)(30, "i", 20), t._uU(31, "fiber_manual_record"), t.qZA(), t._uU(32, " online "), t.qZA()()(), t.TgZ(33, "li", 21), t._UZ(34, "img", 23), t.TgZ(35, "div", 17)(36, "div", 18), t._uU(37, "Joseph Clark"), t.qZA(), t.TgZ(38, "div", 19)(39, "i", 24), t._uU(40, "fiber_manual_record"), t.qZA(), t._uU(41, " online "), t.qZA()()(), t.TgZ(42, "li", 21), t._UZ(43, "img", 25), t.TgZ(44, "div", 17)(45, "div", 18), t._uU(46, "Nancy Taylor"), t.qZA(), t.TgZ(47, "div", 19)(48, "i", 24), t._uU(49, "fiber_manual_record"), t.qZA(), t._uU(50, " online "), t.qZA()()(), t.TgZ(51, "li", 21), t._UZ(52, "img", 26), t.TgZ(53, "div", 17)(54, "div", 18), t._uU(55, "Margaret Wilson"), t.qZA(), t.TgZ(56, "div", 19)(57, "i", 24), t._uU(58, "fiber_manual_record"), t.qZA(), t._uU(59, " online "), t.qZA()()(), t.TgZ(60, "li", 21), t._UZ(61, "img", 27), t.TgZ(62, "div", 17)(63, "div", 18), t._uU(64, "Joseph Jones"), t.qZA(), t.TgZ(65, "div", 19)(66, "i", 20), t._uU(67, "fiber_manual_record"), t.qZA(), t._uU(68, " left 30 mins ago "), t.qZA()()(), t.TgZ(69, "li", 21), t._UZ(70, "img", 28), t.TgZ(71, "div", 17)(72, "div", 18), t._uU(73, "Jane Brown"), t.qZA(), t.TgZ(74, "div", 19)(75, "i", 20), t._uU(76, "fiber_manual_record"), t.qZA(), t._uU(77, " left 10 hours ago "), t.qZA()()(), t.TgZ(78, "li", 21), t._UZ(79, "img", 29), t.TgZ(80, "div", 17)(81, "div", 18), t._uU(82, "Eliza Johnson"), t.qZA(), t.TgZ(83, "div", 19)(84, "i", 24), t._uU(85, "fiber_manual_record"), t.qZA(), t._uU(86, " online "), t.qZA()()(), t.TgZ(87, "li", 21), t._UZ(88, "img", 23), t.TgZ(89, "div", 17)(90, "div", 18), t._uU(91, "Mike Clark"), t.qZA(), t.TgZ(92, "div", 19)(93, "i", 24), t._uU(94, "fiber_manual_record"), t.qZA(), t._uU(95, " online "), t.qZA()()(), t.TgZ(96, "li", 21), t._UZ(97, "img", 25), t.TgZ(98, "div", 17)(99, "div", 18), t._uU(100, "Ann Henry"), t.qZA(), t.TgZ(101, "div", 19)(102, "i", 24), t._uU(103, "fiber_manual_record"), t.qZA(), t._uU(104, " online "), t.qZA()()(), t.TgZ(105, "li", 21), t._UZ(106, "img", 26), t.TgZ(107, "div", 17)(108, "div", 18), t._uU(109, "Nancy Smith"), t.qZA(), t.TgZ(110, "div", 19)(111, "i", 24), t._uU(112, "fiber_manual_record"), t.qZA(), t._uU(113, " online "), t.qZA()()(), t.TgZ(114, "li", 21), t._UZ(115, "img", 30), t.TgZ(116, "div", 17)(117, "div", 18), t._uU(118, "David Wilson"), t.qZA(), t.TgZ(119, "div", 19)(120, "i", 20), t._uU(121, "fiber_manual_record"), t.qZA(), t._uU(122, " offline since Oct 28 "), t.qZA()()()()()()()()()()(), t.TgZ(123, "div", 31)(124, "div", 6)(125, "div", 32)(126, "div", 33), t._UZ(127, "img", 22), t.TgZ(128, "div", 34)(129, "div", 35), t._uU(130, "Maria Smith"), t.qZA(), t.TgZ(131, "div", 36), t._uU(132, "2 new messages"), t.qZA()()(), t.TgZ(133, "ng-scrollbar", 37)(134, "div", 38)(135, "ul")(136, "li", 21)(137, "div", 39)(138, "span", 40), t._uU(139, "10:10 AM, Today "), t.qZA(), t._uU(140, " \xa0 \xa0 "), t.TgZ(141, "span", 41), t._uU(142, "Maria"), t.qZA()(), t.TgZ(143, "div", 42), t._uU(144, " Hi Robert , how are you? How is your work going on? "), t.qZA()(), t.TgZ(145, "li")(146, "div", 43)(147, "span", 41), t._uU(148, "Robert "), t.qZA(), t.TgZ(149, "span", 40), t._uU(150, "10:12 AM, Today"), t.qZA()(), t.TgZ(151, "div", 44)(152, "p"), t._uU(153, "Its good. We completed almost all task assign by our manager."), t.qZA(), t._UZ(154, "div", 4), t.qZA()(), t.TgZ(155, "li")(156, "div", 43)(157, "span", 41), t._uU(158, "Robert "), t.qZA(), t.TgZ(159, "span", 40), t._uU(160, "10:12 AM, Today"), t.qZA()(), t.TgZ(161, "div", 44)(162, "p"), t._uU(163, "How are you feel today? What's about vacation?."), t.qZA(), t._UZ(164, "div", 4), t.qZA()(), t.TgZ(165, "li", 21)(166, "div", 39)(167, "span", 40), t._uU(168, "10:10 AM, Today "), t.qZA(), t._uU(169, " \xa0 \xa0 "), t.TgZ(170, "span", 41), t._uU(171, "Maria"), t.qZA()(), t.TgZ(172, "div", 42), t._uU(173, " I am good, We think for next weekend. "), t.qZA()()()()(), t.TgZ(174, "div", 45)(175, "div", 46)(176, "div", 47)(177, "mat-form-field", 48), t._UZ(178, "input", 49), t.qZA()()(), t.TgZ(179, "div", 50)(180, "button", 51)(181, "i", 52), t._uU(182, "attach_file"), t.qZA()(), t.TgZ(183, "button", 53)(184, "i", 52), t._uU(185, "insert_emoticon"), t.qZA()()()()()()()()()()), 2 & i && (t.xp6(3), t.Q6J("title", "Chat")("items", t.DdM(4, k))("active_item", "Chat"), t.xp6(174), t.Q6J("hideRequiredMarker", e.hideRequiredControl.value))
                },
                dependencies: [p.KC, n.nh, l.KE, b.Nt, q.L]
            });
            const N = [{
                path: "dashboard",
                component: g
            }, {
                path: "projects",
                loadChildren: () => Promise.all([a.e(5938), a.e(2316), a.e(6308), a.e(5546), a.e(8592), a.e(7688)]).then(a.bind(a, 7688)).then(o => o.ProjectsModule)
            }, {
                path: "supports",
                loadChildren: () => Promise.all([a.e(5938), a.e(2316), a.e(6308), a.e(5546), a.e(8592), a.e(4322)]).then(a.bind(a, 4322)).then(o => o.SupportsModule)
            }, {
                path: "billing",
                component: m
            }, {
                path: "chat",
                component: A
            }, {
                path: "settings",
                component: c
            }, {
                path: "**",
                component: j.J
            }];
            class Z {}
            Z.\u0275fac = function(i) {
                return new(i || Z)
            }, Z.\u0275mod = t.oAB({
                type: Z
            }), Z.\u0275inj = t.cJS({
                imports: [y.Bz.forChild(N), y.Bz]
            });
            var Q = a(5920),
                E = a(5626);
            class u {}
            u.\u0275fac = function(i) {
                return new(i || u)
            }, u.\u0275mod = t.oAB({
                type: u
            }), u.\u0275inj = t.cJS({
                providers: [Q.T],
                imports: [_.ez, T.vQ, f.Ns.forRoot({
                    echarts: () => a.e(7386).then(a.bind(a, 7386))
                }), p.kb, r.Ps, n.ot, Z, C.X, s.ZX, l.lN, R.Nh, h.FA, x.LD, D.p9, b.c, O.AV, J.Fk, E.K]
            })
        },
        5920: (M, v, a) => {
            a.d(v, {
                T: () => r
            });
            var _ = a(1135),
                p = a(9186),
                T = a(4650),
                f = a(529);
            class r extends p.n {
                constructor(s) {
                    super(), this.httpClient = s, this.API_URL = "assets/data/my-projects-client.json", this.isTblLoading = !0, this.dataChange = new _.X([])
                }
                get data() {
                    return this.dataChange.value
                }
                getDialogData() {
                    return this.dialogData
                }
                getAllMyProjectss() {
                    this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
                        next: s => {
                            this.isTblLoading = !1, this.dataChange.next(s)
                        },
                        error: s => {
                            this.isTblLoading = !1, console.log(s.name + " " + s.message)
                        }
                    })
                }
                addMyProjects(s) {
                    this.dialogData = s
                }
                updateMyProjects(s) {
                    this.dialogData = s
                }
                deleteMyProjects(s) {
                    console.log(s)
                }
            }
            r.\u0275fac = function(s) {
                return new(s || r)(T.LFG(f.eN))
            }, r.\u0275prov = T.Yz7({
                token: r,
                factory: r.\u0275fac
            })
        }
    }
]);