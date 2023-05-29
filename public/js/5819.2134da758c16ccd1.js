"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [5819], {
        5819: (Ze, ne, c) => {
            c.r(ne), c.d(ne, {
                EmployeeModule: () => Y
            });
            var l = c(6895),
                I = c(4153),
                m = c(4006),
                re = c(249),
                pe = c(2054),
                x = c(7392),
                Z = c(4859),
                u = c(5938),
                se = c(6205),
                v = c(8739),
                w = c(7009),
                _ = c(9549),
                g = c(6308),
                h = c(3848),
                f = c(8255),
                Q = c(3546),
                T = c(9602),
                d = c(671),
                N = c(4385),
                le = c(6709),
                R = c(4144),
                P = c(266),
                ve = c(1948),
                S = c(1206),
                ue = c(3162),
                F = c(1572),
                Te = c(1991),
                _e = c(9132),
                e = c(4650),
                q = c(1299);
            const be = ["chart"];

            function ye(i, a) {
                1 & i && e._UZ(0, "div", 90)
            }

            function Ae(i, a) {
                1 & i && (e.TgZ(0, "mat-icon", 91), e._uU(1, " arrow_downward "), e.qZA())
            }

            function xe(i, a) {
                1 & i && (e.TgZ(0, "mat-icon", 92), e._uU(1, " arrow_upward "), e.qZA())
            }

            function Ce(i, a) {
                1 & i && (e.TgZ(0, "mat-icon", 93), e._uU(1, " remove"), e.qZA())
            }
            const Ue = function(i) {
                    return {
                        done: i
                    }
                },
                qe = function(i, a, t) {
                    return {
                        "task-low": i,
                        "task-high": a,
                        "task-normal": t
                    }
                };

            function ke(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 80)(1, "div")(2, "div", 81)(3, "mat-icon", 82), e._uU(4, "drag_indicator"), e.qZA()()(), e.TgZ(5, "mat-checkbox", 83), e.NdJ("change", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.toggle(r))
                    }), e.qZA(), e.YNc(6, ye, 1, 0, "div", 84), e.TgZ(7, "div", 85), e._uU(8), e.qZA(), e.TgZ(9, "div", 86), e.YNc(10, Ae, 2, 0, "mat-icon", 87), e.YNc(11, xe, 2, 0, "mat-icon", 88), e.YNc(12, Ce, 2, 0, "mat-icon", 89), e._uU(13), e.qZA()()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(5), e.Q6J("checked", !!t.done), e.xp6(2), e.Q6J("ngClass", e.VKq(8, Ue, t.done)), e.xp6(1), e.hij(" ", t.title, ""), e.xp6(1), e.Q6J("ngClass", e.kEZ(10, qe, "Low" === t.priority, "High" === t.priority, "Normal" === t.priority)), e.xp6(1), e.Q6J("ngIf", "Low" === (null == t ? null : t.priority)), e.xp6(1), e.Q6J("ngIf", "High" === (null == t ? null : t.priority)), e.xp6(1), e.Q6J("ngIf", "Normal" === (null == t ? null : t.priority)), e.xp6(1), e.hij(" ", t.priority, " ")
                }
            }
            const De = function() {
                return ["Home"]
            };
            class E {
                constructor() {
                    this.tasks = [{
                        id: "1",
                        title: "Check client report",
                        done: !0,
                        priority: "High"
                    }, {
                        id: "2",
                        title: "Request for festivle holiday",
                        done: !1,
                        priority: "High"
                    }, {
                        id: "3",
                        title: "Order new medicine stock",
                        done: !1,
                        priority: "Low"
                    }, {
                        id: "4",
                        title: "Remind for lunch in hotel",
                        done: !0,
                        priority: "Normal"
                    }, {
                        id: "5",
                        title: "Conference in london",
                        done: !1,
                        priority: "High"
                    }, {
                        id: "6",
                        title: "Announcement for",
                        done: !1,
                        priority: "Normal"
                    }, {
                        id: "7",
                        title: "call bus driver",
                        done: !0,
                        priority: "High"
                    }, {
                        id: "8",
                        title: "Web service data load issue",
                        done: !1,
                        priority: "High"
                    }, {
                        id: "9",
                        title: "Java compile error",
                        done: !1,
                        priority: "Low"
                    }, {
                        id: "10",
                        title: "Integrate project with spring boot",
                        done: !0,
                        priority: "High"
                    }]
                }
                drop(a) {
                    (0, S.bA)(this.tasks, a.previousIndex, a.currentIndex)
                }
                toggle(a) {
                    a.done = !a.done
                }
                ngOnInit() {
                    this.chart1(), this.chart2(), this.gaugechart(), this.stackChart()
                }
                chart1() {
                    this.barChartOptions = {
                        series: [{
                            name: "Work Hours",
                            data: [6.3, 5.5, 4.1, 6.7, 2.2, 4.3]
                        }, {
                            name: "Break Hours",
                            data: [1.3, 2.3, 2, .8, 1.3, 2.7]
                        }],
                        chart: {
                            type: "bar",
                            height: 350,
                            stacked: !0,
                            stackType: "100%",
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#674EC9", "#C1C1C1"],
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: "35%"
                            }
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0
                                }
                            }
                        }],
                        xaxis: {
                            categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                        },
                        fill: {
                            opacity: 1
                        },
                        legend: {
                            position: "bottom",
                            offsetX: 0,
                            offsetY: 0
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
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
                chart2() {
                    this.radialChartOptions = {
                        radialseries: [44, 55, 67],
                        chart: {
                            height: 290,
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
                                            return "52%"
                                        }
                                    }
                                }
                            }
                        },
                        labels: ["Project 1", "Project 2", "Project 3"]
                    }
                }
                gaugechart() {
                    this.gaugeChartOptions = {
                        series2: [72],
                        chart: {
                            height: 310,
                            type: "radialBar",
                            offsetY: -10
                        },
                        plotOptions: {
                            radialBar: {
                                startAngle: -135,
                                endAngle: 135,
                                dataLabels: {
                                    name: {
                                        fontSize: "22px",
                                        fontWeight: 600,
                                        color: "#6777EF",
                                        offsetY: 120
                                    },
                                    value: {
                                        offsetY: 76,
                                        fontSize: "22px",
                                        color: "#9aa0ac",
                                        formatter: function(a) {
                                            return a + "%"
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .15,
                                inverseColors: !1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [0, 50, 65, 91]
                            }
                        },
                        stroke: {
                            dashArray: 4
                        },
                        labels: ["Closed Ticket"]
                    }
                }
                stackChart() {
                    this.stackBarChart = {
                        series: [{
                            name: "Project 1",
                            data: [44, 55, 41, 67, 22, 43]
                        }, {
                            name: "Project 2",
                            data: [13, 23, 20, 8, 13, 27]
                        }, {
                            name: "Project 3",
                            data: [11, 17, 15, 15, 21, 14]
                        }, {
                            name: "Project 4",
                            data: [21, 7, 25, 13, 22, 8]
                        }],
                        chart: {
                            type: "bar",
                            height: 300,
                            foreColor: "#9aa0ac",
                            stacked: !0,
                            toolbar: {
                                show: !1
                            }
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0
                                }
                            }
                        }],
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: "30%"
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
                        },
                        xaxis: {
                            type: "category",
                            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                        },
                        legend: {
                            show: !1
                        },
                        fill: {
                            opacity: 1,
                            colors: ["#F0457D", "#704DAD", "#FFC107", "#a5a5a5"]
                        }
                    }
                }
            }
            E.\u0275fac = function(a) {
                return new(a || E)
            }, E.\u0275cmp = e.Xpm({
                type: E,
                selectors: [
                    ["app-dashboard"]
                ],
                viewQuery: function(a, t) {
                    if (1 & a && e.Gf(be, 5), 2 & a) {
                        let o;
                        e.iGM(o = e.CRH()) && (t.chart = o.first)
                    }
                },
                decls: 386,
                vars: 36,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-lg-3", "col-sm-6"],
                    [1, "info-box7", "bg-c-purple", "order-info-box7"],
                    [1, "info-box7-block"],
                    [1, "m-b-20"],
                    [1, "text-end"],
                    [1, "float-start"],
                    [1, "fas", "fa-ticket-alt"],
                    [1, "m-b-0"],
                    [1, "info-box7", "bg-c-green", "order-info-box7"],
                    [1, "far", "fa-check-circle"],
                    [1, "info-box7", "bg-c-orange", "order-info-box7"],
                    [1, "fas", "fa-briefcase"],
                    [1, "info-box7", "bg-c-blue", "order-info-box7"],
                    [1, "fas", "fa-umbrella-beach"],
                    [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"],
                    [1, "card"],
                    [1, "header"],
                    [1, "body"],
                    [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "grid", "legend", "colors", "tooltip", "fill"],
                    [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"],
                    [3, "series", "chart", "plotOptions", "labels"],
                    [1, "text-center", "p-t-20"],
                    [1, "chart-note"],
                    [1, "dot", "bg-orange"],
                    [1, "dot", "bg-indigo"],
                    [1, "chart-note", "msr-0"],
                    [1, "dot", "bg-green"],
                    ["mat-stroked-button", "", "color", "primary"],
                    [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"],
                    [1, "tableBody"],
                    [1, "responsive_table"],
                    [1, "table", "table-hover"],
                    [1, "table-img"],
                    ["src", "assets/images/user/user5.jpg", "alt", ""],
                    [1, "media-title"],
                    ["href", "mailto:test@gmail.com"],
                    [1, "text-job", "font-11"],
                    [1, "badge", "col-green"],
                    ["src", "assets/images/user/user6.jpg", "alt", ""],
                    [1, "badge", "col-red"],
                    ["src", "assets/images/user/user3.jpg", "alt", ""],
                    ["src", "assets/images/user/user2.jpg", "alt", ""],
                    ["src", "assets/images/user/user1.jpg", "alt", ""],
                    ["src", "assets/images/user/user8.jpg", "alt", ""],
                    ["src", "assets/images/user/user4.jpg", "alt", ""],
                    [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"],
                    [1, "table", "table-hover", "dashboard-task-infos", "text-center"],
                    [1, "label", "l-bg-green", "shadow-style"],
                    [1, "progress", "shadow-style"],
                    ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"],
                    [1, "far", "fa-file-pdf", "tbl-pdf"],
                    [1, "label", "l-bg-purple", "shadow-style"],
                    ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"],
                    [1, "label", "l-bg-orange", "shadow-style"],
                    ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"],
                    [1, "label", "l-bg-cyan", "shadow-style"],
                    ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"],
                    [1, "label", "bg-green", "shadow-style"],
                    ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"],
                    ["visibility", "hover", 2, "height", "375px"],
                    ["cdkDropList", "", 1, "task-list", 3, "cdkDropListDropped"],
                    ["class", "task-box", "cdkDrag", "", 4, "ngFor", "ngForOf"],
                    ["id", "chart"],
                    [3, "series", "chart", "plotOptions", "labels", "fill", "stroke"],
                    [1, "m-t-40", "mb-2"],
                    [1, "row", "text-center"],
                    [1, "col-4", "border-right"],
                    [1, "font-14", "text-muted"],
                    [1, "col-4"],
                    [3, "series", "chart", "dataLabels", "plotOptions", "grid", "responsive", "xaxis", "legend", "fill"],
                    [1, "row", "text-center", "ml-0", "msr-0", "pb-3"],
                    [1, "col-6", "border-right"],
                    [1, "h4", "fw-bold", "mb-0"],
                    [1, "small", "text-gray"],
                    [1, "col-6"],
                    ["cdkDrag", "", 1, "task-box"],
                    ["cdkDragHandle", "", 1, "task-handle", "m-r-20"],
                    ["aria-hidden", "false"],
                    ["color", "primary", 1, "m-r-15", 3, "checked", "change"],
                    ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"],
                    ["matTooltip", "Title", 3, "ngClass"],
                    [3, "ngClass"],
                    ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"],
                    ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"],
                    ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"],
                    [1, "task-custom-placeholder"],
                    ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"],
                    ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"],
                    ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8), e._uU(9, "New Tickets"), e.qZA(), e.TgZ(10, "h2", 9)(11, "span", 10), e._uU(12, "23"), e.qZA(), e._UZ(13, "i", 11), e.qZA(), e.TgZ(14, "p", 12), e._uU(15, "18% Higher Then Last Month"), e.qZA()()()(), e.TgZ(16, "div", 5)(17, "div", 13)(18, "div", 7)(19, "h4", 8), e._uU(20, "Ticket Resolved"), e.qZA(), e.TgZ(21, "h2", 9)(22, "span", 10), e._uU(23, "20"), e.qZA(), e._UZ(24, "i", 14), e.qZA(), e.TgZ(25, "p", 12), e._uU(26, "21% Higher Then Last Month"), e.qZA()()()(), e.TgZ(27, "div", 5)(28, "div", 15)(29, "div", 7)(30, "h4", 8), e._uU(31, "Project Assigned"), e.qZA(), e.TgZ(32, "h2", 9)(33, "span", 10), e._uU(34, "13"), e.qZA(), e._UZ(35, "i", 16), e.qZA(), e.TgZ(36, "p", 12), e._uU(37, "37% Higher Then Last Month"), e.qZA()()()(), e.TgZ(38, "div", 5)(39, "div", 17)(40, "div", 7)(41, "h4", 8), e._uU(42, "Available Leaves"), e.qZA(), e.TgZ(43, "h2", 9)(44, "span", 10), e._uU(45, "34"), e.qZA(), e._UZ(46, "i", 18), e.qZA(), e.TgZ(47, "p", 12), e._uU(48, "10% Higher Then Last Month"), e.qZA()()()()(), e.TgZ(49, "div", 4)(50, "div", 19)(51, "div", 20)(52, "div", 21)(53, "h2"), e._uU(54, "Weekly Working Hours"), e.qZA()(), e.TgZ(55, "div", 22), e._UZ(56, "apx-chart", 23), e.qZA()()(), e.TgZ(57, "div", 24)(58, "div", 20)(59, "div", 21)(60, "h2"), e._uU(61, "Running Project Review"), e.qZA()(), e.TgZ(62, "div", 22), e._UZ(63, "apx-chart", 25), e.TgZ(64, "div", 26)(65, "div", 27), e._UZ(66, "span", 28), e.TgZ(67, "span"), e._uU(68, "Project 1"), e.qZA()(), e.TgZ(69, "div", 27), e._UZ(70, "span", 29), e.TgZ(71, "span"), e._uU(72, "Project 2"), e.qZA()(), e.TgZ(73, "div", 30), e._UZ(74, "span", 31), e.TgZ(75, "span"), e._uU(76, "Project 3"), e.qZA()()(), e.TgZ(77, "div", 26)(78, "button", 32), e._uU(79, "More Details"), e.qZA()()()()()(), e.TgZ(80, "div", 4)(81, "div", 33)(82, "div", 20)(83, "div", 21)(84, "h2"), e._uU(85, "My Team"), e.qZA()(), e.TgZ(86, "div", 34)(87, "div", 35)(88, "table", 36)(89, "thead")(90, "tr")(91, "th"), e._uU(92, "#"), e.qZA(), e.TgZ(93, "th"), e._uU(94, "Employee Name"), e.qZA(), e.TgZ(95, "th"), e._uU(96, "Status"), e.qZA()()(), e.TgZ(97, "tbody")(98, "tr")(99, "td", 37), e._UZ(100, "img", 38), e.qZA(), e.TgZ(101, "td")(102, "div", 39)(103, "a", 40), e._uU(104, "Jay Soni "), e.qZA()(), e.TgZ(105, "div", 41), e._uU(106, "Manager"), e.qZA()(), e.TgZ(107, "td")(108, "div", 42), e._uU(109, "Available"), e.qZA()()(), e.TgZ(110, "tr")(111, "td", 37), e._UZ(112, "img", 43), e.qZA(), e.TgZ(113, "td")(114, "div", 39)(115, "a", 40), e._uU(116, "Sarah Smith "), e.qZA()(), e.TgZ(117, "div", 41), e._uU(118, "Developer"), e.qZA()(), e.TgZ(119, "td")(120, "div", 44), e._uU(121, "Absend"), e.qZA()()(), e.TgZ(122, "tr")(123, "td", 37), e._UZ(124, "img", 45), e.qZA(), e.TgZ(125, "td")(126, "div", 39)(127, "a", 40), e._uU(128, "Dr.Megha Trivedi "), e.qZA()(), e.TgZ(129, "div", 41), e._uU(130, "Tester"), e.qZA()(), e.TgZ(131, "td")(132, "div", 42), e._uU(133, "Available"), e.qZA()()(), e.TgZ(134, "tr")(135, "td", 37), e._UZ(136, "img", 46), e.qZA(), e.TgZ(137, "td")(138, "div", 39)(139, "a", 40), e._uU(140, "John Deo "), e.qZA()(), e.TgZ(141, "div", 41), e._uU(142, "Designer"), e.qZA()(), e.TgZ(143, "td")(144, "div", 42), e._uU(145, "Available"), e.qZA()()(), e.TgZ(146, "tr")(147, "td", 37), e._UZ(148, "img", 47), e.qZA(), e.TgZ(149, "td")(150, "div", 39)(151, "a", 40), e._uU(152, "Jacob Ryan "), e.qZA()(), e.TgZ(153, "div", 41), e._uU(154, "Developer"), e.qZA()(), e.TgZ(155, "td")(156, "div", 44), e._uU(157, "Absend"), e.qZA()()(), e.TgZ(158, "tr")(159, "td", 37), e._UZ(160, "img", 48), e.qZA(), e.TgZ(161, "td")(162, "div", 39)(163, "a", 40), e._uU(164, "Jay Soni "), e.qZA()(), e.TgZ(165, "div", 41), e._uU(166, "Team Leader"), e.qZA()(), e.TgZ(167, "td")(168, "div", 42), e._uU(169, "Available"), e.qZA()()(), e.TgZ(170, "tr")(171, "td", 37), e._UZ(172, "img", 49), e.qZA(), e.TgZ(173, "td")(174, "div", 39)(175, "a", 40), e._uU(176, "John Deo "), e.qZA()(), e.TgZ(177, "div", 41), e._uU(178, "Director"), e.qZA()(), e.TgZ(179, "td")(180, "div", 42), e._uU(181, "Available"), e.qZA()()()()()()()()(), e.TgZ(182, "div", 50)(183, "div", 20)(184, "div", 21)(185, "h2"), e._uU(186, "My Task"), e.qZA()(), e.TgZ(187, "div", 34)(188, "div", 35)(189, "table", 51)(190, "thead")(191, "tr")(192, "th"), e._uU(193, "User"), e.qZA(), e.TgZ(194, "th"), e._uU(195, "Task"), e.qZA(), e.TgZ(196, "th"), e._uU(197, "Status"), e.qZA(), e.TgZ(198, "th"), e._uU(199, "Manager"), e.qZA(), e.TgZ(200, "th"), e._uU(201, "Progress"), e.qZA(), e.TgZ(202, "th"), e._uU(203, "Documents"), e.qZA(), e.TgZ(204, "th"), e._uU(205, "Details"), e.qZA()()(), e.TgZ(206, "tbody")(207, "tr")(208, "td", 37), e._UZ(209, "img", 47), e.qZA(), e.TgZ(210, "td"), e._uU(211, "Task A"), e.qZA(), e.TgZ(212, "td")(213, "span", 52), e._uU(214, "Working"), e.qZA()(), e.TgZ(215, "td"), e._uU(216, "Jay Soni"), e.qZA(), e.TgZ(217, "td")(218, "div", 53), e._UZ(219, "div", 54), e.qZA()(), e.TgZ(220, "td"), e._UZ(221, "i", 55), e.qZA(), e.TgZ(222, "td")(223, "button", 32), e._uU(224, "Details"), e.qZA()()(), e.TgZ(225, "tr")(226, "td", 37), e._UZ(227, "img", 46), e.qZA(), e.TgZ(228, "td"), e._uU(229, "Task B"), e.qZA(), e.TgZ(230, "td")(231, "span", 56), e._uU(232, "Completed"), e.qZA()(), e.TgZ(233, "td"), e._uU(234, "Sarah Smith"), e.qZA(), e.TgZ(235, "td")(236, "div", 53), e._UZ(237, "div", 57), e.qZA()(), e.TgZ(238, "td"), e._UZ(239, "i", 55), e.qZA(), e.TgZ(240, "td")(241, "button", 32), e._uU(242, "Details"), e.qZA()()(), e.TgZ(243, "tr")(244, "td", 37), e._UZ(245, "img", 45), e.qZA(), e.TgZ(246, "td"), e._uU(247, "Task C"), e.qZA(), e.TgZ(248, "td")(249, "span", 58), e._uU(250, "On Hold"), e.qZA()(), e.TgZ(251, "td"), e._uU(252, "Megha Trivedi"), e.qZA(), e.TgZ(253, "td")(254, "div", 53), e._UZ(255, "div", 59), e.qZA()(), e.TgZ(256, "td"), e._UZ(257, "i", 55), e.qZA(), e.TgZ(258, "td")(259, "button", 32), e._uU(260, "Details"), e.qZA()()(), e.TgZ(261, "tr")(262, "td", 37), e._UZ(263, "img", 49), e.qZA(), e.TgZ(264, "td"), e._uU(265, "Task D"), e.qZA(), e.TgZ(266, "td")(267, "span", 60), e._uU(268, "Wait Approvel"), e.qZA()(), e.TgZ(269, "td"), e._uU(270, "Jacob Ryan"), e.qZA(), e.TgZ(271, "td")(272, "div", 53), e._UZ(273, "div", 61), e.qZA()(), e.TgZ(274, "td"), e._UZ(275, "i", 55), e.qZA(), e.TgZ(276, "td")(277, "button", 32), e._uU(278, "Details"), e.qZA()()(), e.TgZ(279, "tr")(280, "td", 37), e._UZ(281, "img", 38), e.qZA(), e.TgZ(282, "td"), e._uU(283, "Task E"), e.qZA(), e.TgZ(284, "td")(285, "span", 62), e._uU(286, "Suspended"), e.qZA()(), e.TgZ(287, "td"), e._uU(288, "Airi Satou"), e.qZA(), e.TgZ(289, "td")(290, "div", 53), e._UZ(291, "div", 63), e.qZA()(), e.TgZ(292, "td"), e._UZ(293, "i", 55), e.qZA(), e.TgZ(294, "td")(295, "button", 32), e._uU(296, "Details"), e.qZA()()(), e.TgZ(297, "tr")(298, "td", 37), e._UZ(299, "img", 47), e.qZA(), e.TgZ(300, "td"), e._uU(301, "Task A"), e.qZA(), e.TgZ(302, "td")(303, "span", 52), e._uU(304, "Working"), e.qZA()(), e.TgZ(305, "td"), e._uU(306, "Angelica Ramos"), e.qZA(), e.TgZ(307, "td")(308, "div", 53), e._UZ(309, "div", 54), e.qZA()(), e.TgZ(310, "td"), e._UZ(311, "i", 55), e.qZA(), e.TgZ(312, "td")(313, "button", 32), e._uU(314, "Details"), e.qZA()()(), e.TgZ(315, "tr")(316, "td", 37), e._UZ(317, "img", 46), e.qZA(), e.TgZ(318, "td"), e._uU(319, "Task B"), e.qZA(), e.TgZ(320, "td")(321, "span", 56), e._uU(322, "Completed"), e.qZA()(), e.TgZ(323, "td"), e._uU(324, "Ashton Cox"), e.qZA(), e.TgZ(325, "td")(326, "div", 53), e._UZ(327, "div", 57), e.qZA()(), e.TgZ(328, "td"), e._UZ(329, "i", 55), e.qZA(), e.TgZ(330, "td")(331, "button", 32), e._uU(332, "Details"), e.qZA()()()()()()()()()(), e.TgZ(333, "div", 4)(334, "div", 33)(335, "div", 20)(336, "div", 21)(337, "h2"), e._uU(338, "Todo List"), e.qZA()(), e.TgZ(339, "div", 22)(340, "ng-scrollbar", 64)(341, "div", 65), e.NdJ("cdkDropListDropped", function(n) {
                        return t.drop(n)
                    }), e.YNc(342, ke, 14, 14, "div", 66), e.qZA()()()()(), e.TgZ(343, "div", 33)(344, "div", 20)(345, "div", 21)(346, "h2"), e._uU(347, "Ticket Status"), e.qZA()(), e.TgZ(348, "div", 22)(349, "div", 67), e._UZ(350, "apx-chart", 68), e.qZA(), e.TgZ(351, "div", 69)(352, "div", 70)(353, "div", 71)(354, "h4", 12), e._uU(355, "67%"), e.qZA(), e.TgZ(356, "span", 72), e._uU(357, "New Ticket"), e.qZA()(), e.TgZ(358, "div", 71)(359, "h4", 12), e._uU(360, "33%"), e.qZA(), e.TgZ(361, "span", 72), e._uU(362, "Repeat Ticket"), e.qZA()(), e.TgZ(363, "div", 73)(364, "h4", 12), e._uU(365, "1 Day"), e.qZA(), e.TgZ(366, "span", 72), e._uU(367, "Duration"), e.qZA()()()()()()(), e.TgZ(368, "div", 24)(369, "div", 20)(370, "div", 21)(371, "h2"), e._uU(372, "Ticket Resolved"), e.qZA()(), e.TgZ(373, "div", 22), e._UZ(374, "apx-chart", 74), e.TgZ(375, "div", 75)(376, "div", 76)(377, "div", 77), e._uU(378, "30%"), e.qZA(), e.TgZ(379, "span", 78), e._uU(380, "Last week"), e.qZA()(), e.TgZ(381, "div", 79)(382, "div", 77), e._uU(383, "70%"), e.qZA(), e.TgZ(384, "span", 78), e._uU(385, "Last month"), e.qZA()()()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "Dashboard")("items", e.DdM(35, De))("active_item", "Dashboard"), e.xp6(53), e.Q6J("series", t.barChartOptions.series)("chart", t.barChartOptions.chart)("dataLabels", t.barChartOptions.dataLabels)("plotOptions", t.barChartOptions.plotOptions)("responsive", t.barChartOptions.responsive)("xaxis", t.barChartOptions.xaxis)("grid", t.barChartOptions.grid)("legend", t.barChartOptions.legend)("colors", t.barChartOptions.colors)("tooltip", t.barChartOptions.tooltip)("fill", t.barChartOptions.fill), e.xp6(7), e.Q6J("series", t.radialChartOptions.radialseries)("chart", t.radialChartOptions.chart)("plotOptions", t.radialChartOptions.plotOptions)("labels", t.radialChartOptions.labels), e.xp6(279), e.Q6J("ngForOf", t.tasks), e.xp6(8), e.Q6J("series", t.gaugeChartOptions.series2)("chart", t.gaugeChartOptions.chart)("plotOptions", t.gaugeChartOptions.plotOptions)("labels", t.gaugeChartOptions.labels)("fill", t.gaugeChartOptions.fill)("stroke", t.gaugeChartOptions.stroke), e.xp6(24), e.Q6J("series", t.stackBarChart.series)("chart", t.stackBarChart.chart)("dataLabels", t.stackBarChart.dataLabels)("plotOptions", t.stackBarChart.plotOptions)("grid", t.stackBarChart.grid)("grid", t.stackBarChart.grid)("responsive", t.stackBarChart.responsive)("xaxis", t.stackBarChart.xaxis)("legend", t.stackBarChart.legend)("fill", t.stackBarChart.fill))
                },
                dependencies: [l.mk, l.sg, l.O5, I.KC, x.Hw, Z.lW, se.x, le.oG, P.gM, S.Wj, S.Zt, S.Bh, S.Hk, q.L]
            });
            var b = c(5017),
                ce = c(4968),
                k = c(1135),
                de = c(6451),
                me = c(4004),
                D = c(9186),
                M = c(529);
            class C extends D.n {
                constructor(a) {
                    super(), this.httpClient = a, this.API_URL = "assets/data/attendance.json", this.isTblLoading = !0, this.dataChange = new k.X([])
                }
                get data() {
                    return this.dataChange.value
                }
                getDialogData() {
                    return this.dialogData
                }
                getAllAttendancess() {
                    this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
                        next: a => {
                            this.isTblLoading = !1, this.dataChange.next(a)
                        },
                        error: a => {
                            this.isTblLoading = !1, console.log(a.name + " " + a.message)
                        }
                    })
                }
                addAttendances(a) {
                    this.dialogData = a
                }
                updateAttendances(a) {
                    this.dialogData = a
                }
                deleteAttendances(a) {
                    console.log(a)
                }
            }

            function Me(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8), e._uU(7, "Attendance Details"), e.qZA()()()()(), e.TgZ(8, "button", 9), e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw();
                        return e.KtG(n.dialogRef.close())
                    }), e.TgZ(9, "mat-icon"), e._uU(10, "close"), e.qZA()()(), e.TgZ(11, "div", 10)(12, "mat-card-content")(13, "div", 11)(14, "i", 12), e._uU(15, "event_note"), e.qZA(), e.TgZ(16, "div", 13), e._uU(17), e.ALo(18, "date"), e.qZA()(), e.TgZ(19, "div", 14)(20, "i", 12), e._uU(21, "schedule"), e.qZA(), e.TgZ(22, "div", 13), e._uU(23), e.qZA()(), e.TgZ(24, "div", 15)(25, "i", 12), e._uU(26, "free_breakfast"), e.qZA(), e.TgZ(27, "div", 13), e._uU(28), e.qZA()(), e.TgZ(29, "div", 16)(30, "i", 12), e._uU(31, "schedule"), e.qZA(), e.TgZ(32, "div", 13), e._uU(33), e.qZA()(), e.TgZ(34, "div", 17)(35, "i", 12), e._uU(36, "verified"), e.qZA(), e.TgZ(37, "div", 13), e._uU(38), e.qZA()(), e.TgZ(39, "div", 18)(40, "i", 12), e._uU(41, "article"), e.qZA(), e.TgZ(42, "div", 13), e._uU(43), e.qZA()()()()()
                }
                if (2 & i) {
                    const t = e.oxw();
                    e.xp6(13), e.Q6J("matTooltipPosition", "above"), e.xp6(4), e.hij(" ", e.xi3(18, 12, t.attendances.date, "MMMM d, yyyy"), " "), e.xp6(2), e.Q6J("matTooltipPosition", "above"), e.xp6(4), e.hij(" ", t.attendances.check_in, " "), e.xp6(1), e.Q6J("matTooltipPosition", "above"), e.xp6(4), e.hij(" ", t.attendances.break, " "), e.xp6(1), e.Q6J("matTooltipPosition", "above"), e.xp6(4), e.hij(" ", t.attendances.check_out, " "), e.xp6(1), e.Q6J("matTooltipPosition", "above"), e.xp6(4), e.hij(" ", t.attendances.status, " "), e.xp6(1), e.Q6J("matTooltipPosition", "above"), e.xp6(4), e.hij("", t.attendances.details, " ")
                }
            }
            C.\u0275fac = function(a) {
                return new(a || C)(e.LFG(M.eN))
            }, C.\u0275prov = e.Yz7({
                token: C,
                factory: C.\u0275fac
            });
            class O {
                constructor(a, t, o, n) {
                    this.dialogRef = a, this.data = t, this.attendancesService = o, this.fb = n, this.isDetails = !1, this.formControl = new m.p4("", [m.kI.required]), this.action = t.action, "details" === this.action && (this.attendances = t.attendances, this.isDetails = !0)
                }
                getErrorMessage() {
                    return this.formControl.hasError("required") ? "Required field" : this.formControl.hasError("email") ? "Not a valid email" : ""
                }
                createContactForm() {
                    return this.fb.group({
                        id: [this.attendances.id],
                        date: [(0, l.p6)(this.attendances.date, "yyyy-MM-dd, HH:mm", "en"), [m.kI.required]],
                        check_in: [this.attendances.check_in],
                        break: [this.attendances.break],
                        check_out: [this.attendances.check_out],
                        hours: [this.attendances.hours],
                        status: [this.attendances.status],
                        details: [this.attendances.details]
                    })
                }
                submit() {}
                onNoClick() {
                    this.dialogRef.close()
                }
                confirmAdd() {
                    this.attendancesService.addAttendances(this.attendancesForm ? .getRawValue())
                }
            }
            O.\u0275fac = function(a) {
                return new(a || O)(e.Y36(u.so), e.Y36(u.WI), e.Y36(C), e.Y36(m.QS))
            }, O.\u0275cmp = e.Xpm({
                type: O,
                selectors: [
                    ["app-form"]
                ],
                decls: 2,
                vars: 1,
                consts: [
                    [1, "addContainer"],
                    ["class", "contact-details", 4, "ngIf"],
                    [1, "contact-details"],
                    [1, "modalHeader"],
                    [1, "editRowModal"],
                    [1, "modalHeader", "clearfix"],
                    [1, "modal-about", "contact-header"],
                    [1, "contact-details-heading"],
                    [1, "contact-details-name", "mb-2"],
                    ["mat-icon-button", "", "aria-label", "Close dialog", 1, "modal-close-button", 3, "click"],
                    ["mat-dialog-content", ""],
                    ["matTooltip", "Attendance Date", 1, "contact-details-field", 3, "matTooltipPosition"],
                    [1, "material-icons-two-tone", "color-icon"],
                    [1, "contact-detail-info"],
                    ["matTooltip", "Check-in", 1, "contact-details-field", 3, "matTooltipPosition"],
                    ["matTooltip", "Break", 1, "contact-details-field", 3, "matTooltipPosition"],
                    ["matTooltip", "Check-out", 1, "contact-details-field", 3, "matTooltipPosition"],
                    ["matTooltip", "Status", 1, "contact-details-field", 3, "matTooltipPosition"],
                    ["matTooltip", "Details", 1, "contact-details-field", 3, "matTooltipPosition"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "div", 0), e.YNc(1, Me, 44, 15, "div", 1), e.qZA()), 2 & a && (e.xp6(1), e.Q6J("ngIf", t.isDetails))
                },
                dependencies: [l.O5, x.Hw, Z.RK, u.xY, Q.dn, P.gM, l.uU]
            });
            const we = ["filter"];

            function Ne(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, "Id "), e.qZA())
            }

            function Se(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Oqu(t.id)
                }
            }

            function Le(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, "Date "), e.qZA())
            }

            function je(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.ALo(2, "date"), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.date, "dd/MM/yyyy"), "")
                }
            }

            function Je(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, "Check-In "), e.qZA())
            }

            function Ye(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.check_in, " ")
                }
            }

            function Ie(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, "Break "), e.qZA())
            }

            function Qe(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.break, " ")
                }
            }

            function Re(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, "Check-Out "), e.qZA())
            }

            function Pe(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.check_out, " ")
                }
            }

            function Fe(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, "Hours "), e.qZA())
            }

            function Ee(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.hours, " ")
                }
            }

            function Oe(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 38), e._uU(1, " Status "), e.qZA())
            }

            function Be(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 41), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function He(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 42), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function Ge(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 39), e.YNc(1, Be, 3, 1, "div", 40), e.YNc(2, He, 3, 1, "div", 40), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Q6J("ngIf", "Present" === t.status), e.xp6(1), e.Q6J("ngIf", "Absent" === t.status)
                }
            }

            function Xe(i, a) {
                1 & i && e._UZ(0, "mat-header-row")
            }

            function $e(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-row", 43), e.NdJ("click", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.detailsCall(r))
                    }), e.qZA()
                }
                2 & i && e.Udp("cursor", "pointer")
            }

            function ze(i, a) {
                1 & i && (e.TgZ(0, "div", 44), e._UZ(1, "mat-progress-spinner", 45), e.qZA()), 2 & i && (e.xp6(1), e.Q6J("diameter", 40))
            }

            function We(i, a) {
                if (1 & i && (e.TgZ(0, "div", 46), e._uU(1, " No results "), e.qZA()), 2 & i) {
                    const t = e.oxw();
                    e.Udp("display", 0 === t.dataSource.renderedData.length ? "" : "none")
                }
            }
            const Ke = function() {
                    return ["Home"]
                },
                Ve = function() {
                    return [5, 10, 25, 100]
                };
            class B extends D.n {
                constructor(a, t, o, n) {
                    super(), this.httpClient = a, this.dialog = t, this.attendancesService = o, this.snackBar = n, this.filterToggle = !1, this.displayedColumns = ["date", "check_in", "break", "check_out", "hours", "status"], this.selection = new b.Ov(!0, []), this.contextMenuPosition = {
                        x: "0px",
                        y: "0px"
                    }
                }
                ngOnInit() {
                    this.loadData()
                }
                refresh() {
                    this.loadData()
                }
                detailsCall(a) {
                    let t;
                    t = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr", this.dialog.open(O, {
                        data: {
                            attendances: a,
                            action: "details"
                        },
                        direction: t,
                        height: "70%",
                        width: "35%"
                    })
                }
                loadData() {
                    this.exampleDatabase = new C(this.httpClient), this.dataSource = new et(this.exampleDatabase, this.paginator, this.sort), this.subs.sink = (0, ce.R)(this.filter.nativeElement, "keyup").subscribe(() => {
                        this.dataSource && (this.dataSource.filter = this.filter.nativeElement.value)
                    })
                }
            }
            B.\u0275fac = function(a) {
                return new(a || B)(e.Y36(M.eN), e.Y36(u.uw), e.Y36(C), e.Y36(w.ux))
            }, B.\u0275cmp = e.Xpm({
                type: B,
                selectors: [
                    ["app-attendances"]
                ],
                viewQuery: function(a, t) {
                    if (1 & a && (e.Gf(v.NW, 7), e.Gf(g.YE, 7), e.Gf(we, 7), e.Gf(f.p6, 5)), 2 & a) {
                        let o;
                        e.iGM(o = e.CRH()) && (t.paginator = o.first), e.iGM(o = e.CRH()) && (t.sort = o.first), e.iGM(o = e.CRH()) && (t.filter = o.first), e.iGM(o = e.CRH()) && (t.contextMenu = o.first)
                    }
                },
                features: [e.qOj],
                decls: 54,
                vars: 14,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-md-12"],
                    [1, "tabbable-line"],
                    [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"],
                    [1, "card"],
                    [1, "body"],
                    [1, "responsive_table"],
                    [1, "materialTableHeader"],
                    [1, "col-8"],
                    [1, "header-buttons-left", "ms-0"],
                    [1, "tbl-title"],
                    [1, "tbl-search-box"],
                    ["for", "search-input"],
                    [1, "material-icons", "search-icon"],
                    ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"],
                    ["filter", ""],
                    ["matSort", "", 1, "mat-cell", 3, "dataSource"],
                    ["table", ""],
                    ["matColumnDef", "id"],
                    ["mat-sort-header", "", 4, "matHeaderCellDef"],
                    [4, "matCellDef"],
                    ["matColumnDef", "date"],
                    ["matColumnDef", "check_in"],
                    ["matColumnDef", "break"],
                    ["matColumnDef", "check_out"],
                    ["matColumnDef", "hours"],
                    ["matColumnDef", "status"],
                    ["mat-cell", "", 4, "matCellDef"],
                    [4, "matHeaderRowDef"],
                    ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"],
                    ["class", "tbl-spinner", 4, "ngIf"],
                    ["class", "no-results", 3, "display", 4, "ngIf"],
                    [3, "length", "pageIndex", "pageSize", "pageSizeOptions"],
                    ["paginator", ""],
                    ["mat-sort-header", ""],
                    ["mat-cell", ""],
                    [4, "ngIf"],
                    [1, "badge", "badge-pill", "badge-primary", "col-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-red"],
                    ["matRipple", "", 3, "click"],
                    [1, "tbl-spinner"],
                    ["color", "primary", "mode", "indeterminate", 3, "diameter"],
                    [1, "no-results"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 4)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 4)(14, "div", 12)(15, "ul", 13)(16, "li", 14)(17, "h2"), e._uU(18, "Attendances"), e.qZA()(), e.TgZ(19, "li", 15)(20, "label", 16)(21, "i", 17), e._uU(22, "search"), e.qZA()(), e._UZ(23, "input", 18, 19), e.qZA()()()()(), e.TgZ(25, "mat-table", 20, 21), e.ynx(27, 22), e.YNc(28, Ne, 2, 0, "mat-header-cell", 23), e.YNc(29, Se, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(30, 25), e.YNc(31, Le, 2, 0, "mat-header-cell", 23), e.YNc(32, je, 3, 4, "mat-cell", 24), e.BQk(), e.ynx(33, 26), e.YNc(34, Je, 2, 0, "mat-header-cell", 23), e.YNc(35, Ye, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(36, 27), e.YNc(37, Ie, 2, 0, "mat-header-cell", 23), e.YNc(38, Qe, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(39, 28), e.YNc(40, Re, 2, 0, "mat-header-cell", 23), e.YNc(41, Pe, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(42, 29), e.YNc(43, Fe, 2, 0, "mat-header-cell", 23), e.YNc(44, Ee, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(45, 30), e.YNc(46, Oe, 2, 0, "mat-header-cell", 23), e.YNc(47, Ge, 3, 2, "mat-cell", 31), e.BQk(), e.YNc(48, Xe, 1, 0, "mat-header-row", 32), e.YNc(49, $e, 1, 2, "mat-row", 33), e.qZA(), e.YNc(50, ze, 2, 1, "div", 34), e.YNc(51, We, 2, 2, "div", 35), e._UZ(52, "mat-paginator", 36, 37), e.qZA()()()()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "Attendance")("items", e.DdM(12, Ke))("active_item", "Attendance"), e.xp6(22), e.Q6J("dataSource", t.dataSource), e.xp6(23), e.Q6J("matHeaderRowDef", t.displayedColumns), e.xp6(1), e.Q6J("matRowDefColumns", t.displayedColumns), e.xp6(1), e.Q6J("ngIf", null == t.exampleDatabase ? null : t.exampleDatabase.isTblLoading), e.xp6(1), e.Q6J("ngIf", !(null != t.exampleDatabase && t.exampleDatabase.isTblLoading)), e.xp6(1), e.Q6J("length", t.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", e.DdM(13, Ve)))
                },
                dependencies: [l.O5, v.NW, g.YE, g.nU, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, F.Ou, q.L, l.uU]
            });
            class et extends b.o2 {
                get filter() {
                    return this.filterChange.value
                }
                set filter(a) {
                    this.filterChange.next(a)
                }
                constructor(a, t, o) {
                    super(), this.exampleDatabase = a, this.paginator = t, this._sort = o, this.filterChange = new k.X(""), this.filteredData = [], this.renderedData = [], this.filterChange.subscribe(() => this.paginator.pageIndex = 0)
                }
                connect() {
                    const a = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
                    return this.exampleDatabase.getAllAttendancess(), (0, de.T)(...a).pipe((0, me.U)(() => {
                        this.filteredData = this.exampleDatabase.data.slice().filter(n => -1 !== (n.date + n.check_in + n.break+n.check_out + n.hours + n.status).toLowerCase().indexOf(this.filter.toLowerCase()));
                        const t = this.sortData(this.filteredData.slice());
                        return this.renderedData = t.splice(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize), this.renderedData
                    }))
                }
                disconnect() {}
                sortData(a) {
                    return this._sort.active && "" !== this._sort.direction ? a.sort((t, o) => {
                        let n = "",
                            r = "";
                        switch (this._sort.active) {
                            case "id":
                                [n, r] = [t.id, o.id];
                                break;
                            case "date":
                                [n, r] = [t.date, o.date];
                                break;
                            case "check_in":
                                [n, r] = [t.check_in, o.check_in];
                                break;
                            case "break":
                                [n, r] = [t.break, o.break];
                                break;
                            case "check_out":
                                [n, r] = [t.check_out, o.check_out]
                        }
                        return ((isNaN(+n) ? n : +n) < (isNaN(+r) ? r : +r) ? -1 : 1) * ("asc" === this._sort.direction ? 1 : -1)
                    }) : a
                }
            }
            const tt = function() {
                return ["Home"]
            };
            class H {
                constructor() {}
            }
            H.\u0275fac = function(a) {
                return new(a || H)
            }, H.\u0275cmp = e.Xpm({
                type: H,
                selectors: [
                    ["app-myteam"]
                ],
                decls: 272,
                vars: 4,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row", "clearfix"],
                    [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"],
                    [1, "card"],
                    [1, "body"],
                    [1, "row"],
                    [1, "col-12"],
                    [1, "card", "p-3"],
                    [1, "col-12", "col-md-2", "mb-0"],
                    ["src", "assets/images/user/usrbig1.jpg", 1, "img-circle", "doc-card-image", 2, "width", "150px"],
                    [1, "col-md-6", "border-right", "mb-0"],
                    [1, "doc-card-title"],
                    [1, "d-flex", "flex-row", "align-items-center"],
                    [1, "d-flex", "flex-row", "align-items-center", "ratings"],
                    [1, "msr-1", "rating-number"],
                    [1, "stars"],
                    [1, "fas", "fa-star", "col-orange"],
                    [1, "far", "fa-star", "col-orange"],
                    [1, "msr-2"],
                    [1, "description"],
                    [1, "d-flex", "col-md-4", "mb-0"],
                    [1, "d-flex", "flex-column", "justify-content-start", "user-profile", "w-100"],
                    [1, "fas", "fa-map-marker-alt", "pt-3", "psr-3"],
                    [1, "fab", "fa-twitter", "pt-3", "psr-3"],
                    [1, "fas", "fa-mobile-alt", "pt-3", "psr-3"],
                    [1, "far", "fa-envelope", "pt-3", "psr-3"],
                    ["src", "assets/images/user/usrbig2.jpg", 1, "img-circle", "doc-card-image", 2, "width", "150px"],
                    ["src", "assets/images/user/usrbig3.jpg", 1, "img-circle", "doc-card-image", 2, "width", "150px"],
                    ["src", "assets/images/user/usrbig4.jpg", 1, "img-circle", "doc-card-image", 2, "width", "150px"],
                    ["src", "assets/images/user/usrbig5.jpg", 1, "img-circle", "doc-card-image", 2, "width", "150px"],
                    ["src", "assets/images/user/usrbig6.jpg", 1, "img-circle", "doc-card-image", 2, "width", "150px"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 8)(12, "div", 11), e._UZ(13, "img", 12), e.qZA(), e.TgZ(14, "div", 13)(15, "div", 14)(16, "h4"), e._uU(17, "Sarah Smith"), e.qZA()(), e.TgZ(18, "p"), e._uU(19, "B.E."), e.qZA(), e.TgZ(20, "div", 15)(21, "div", 16)(22, "span", 17), e._uU(23, "4"), e.qZA(), e.TgZ(24, "div", 18), e._UZ(25, "i", 19)(26, "i", 19)(27, "i", 19)(28, "i", 19)(29, "i", 20), e.qZA(), e.TgZ(30, "span", 21), e._uU(31, "(12342 ratings)"), e.qZA()()(), e.TgZ(32, "div", 22)(33, "p")(34, "strong"), e._uU(35, "Lorem Ipsum"), e.qZA(), e._uU(36, "\xa0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."), e._UZ(37, "br"), e.qZA()()(), e.TgZ(38, "div", 23)(39, "div", 24)(40, "div"), e._UZ(41, "i", 25), e._uU(42, " Shanti Nagar Bldg No B 4, Sector No 6, Mira Road"), e.qZA(), e.TgZ(43, "div"), e._UZ(44, "i", 26), e._uU(45, " sarah_smith "), e.qZA(), e.TgZ(46, "div"), e._UZ(47, "i", 27), e._uU(48, " 123456789 "), e.qZA(), e.TgZ(49, "div"), e._UZ(50, "i", 28), e._uU(51, " sarah@example.com"), e.qZA()()()()()()(), e.TgZ(52, "div", 8)(53, "div", 9)(54, "div", 10)(55, "div", 8)(56, "div", 11), e._UZ(57, "img", 29), e.qZA(), e.TgZ(58, "div", 13)(59, "div", 14)(60, "h4"), e._uU(61, "Jay Soni"), e.qZA()(), e.TgZ(62, "p"), e._uU(63, "Computer Science"), e.qZA(), e.TgZ(64, "div", 15)(65, "div", 16)(66, "span", 17), e._uU(67, "3"), e.qZA(), e.TgZ(68, "div", 18), e._UZ(69, "i", 19)(70, "i", 19)(71, "i", 19)(72, "i", 20)(73, "i", 20), e.qZA(), e.TgZ(74, "span", 21), e._uU(75, "(6545 ratings)"), e.qZA()()(), e.TgZ(76, "div", 22)(77, "p")(78, "strong"), e._uU(79, "Lorem Ipsum"), e.qZA(), e._uU(80, "\xa0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."), e._UZ(81, "br"), e.qZA()()(), e.TgZ(82, "div", 23)(83, "div", 24)(84, "div"), e._UZ(85, "i", 25), e._uU(86, " Shanti Nagar Bldg No B 4, Sector No 6, Mira Road"), e.qZA(), e.TgZ(87, "div"), e._UZ(88, "i", 26), e._uU(89, " jay_soni "), e.qZA(), e.TgZ(90, "div"), e._UZ(91, "i", 27), e._uU(92, " 123456789 "), e.qZA(), e.TgZ(93, "div"), e._UZ(94, "i", 28), e._uU(95, " jay@example.com"), e.qZA()()()()()()(), e.TgZ(96, "div", 8)(97, "div", 9)(98, "div", 10)(99, "div", 8)(100, "div", 11), e._UZ(101, "img", 30), e.qZA(), e.TgZ(102, "div", 13)(103, "div", 14)(104, "h4"), e._uU(105, "Megha Trivedi"), e.qZA()(), e.TgZ(106, "p"), e._uU(107, "M.C.A."), e.qZA(), e.TgZ(108, "div", 15)(109, "div", 16)(110, "span", 17), e._uU(111, "4"), e.qZA(), e.TgZ(112, "div", 18), e._UZ(113, "i", 19)(114, "i", 19)(115, "i", 19)(116, "i", 19)(117, "i", 20), e.qZA(), e.TgZ(118, "span", 21), e._uU(119, "(3456 ratings)"), e.qZA()()(), e.TgZ(120, "div", 22)(121, "p")(122, "strong"), e._uU(123, "Lorem Ipsum"), e.qZA(), e._uU(124, "\xa0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."), e._UZ(125, "br"), e.qZA()()(), e.TgZ(126, "div", 23)(127, "div", 24)(128, "div"), e._UZ(129, "i", 25), e._uU(130, " Shanti Nagar Bldg No B 4, Sector No 6, Mira Road"), e.qZA(), e.TgZ(131, "div"), e._UZ(132, "i", 26), e._uU(133, " megha_trivedi "), e.qZA(), e.TgZ(134, "div"), e._UZ(135, "i", 27), e._uU(136, " 123456789 "), e.qZA(), e.TgZ(137, "div"), e._UZ(138, "i", 28), e._uU(139, " megha@example.com"), e.qZA()()()()()()(), e.TgZ(140, "div", 8)(141, "div", 9)(142, "div", 10)(143, "div", 8)(144, "div", 11), e._UZ(145, "img", 31), e.qZA(), e.TgZ(146, "div", 13)(147, "div", 14)(148, "h4"), e._uU(149, "Jacob Ryan"), e.qZA()(), e.TgZ(150, "p"), e._uU(151, "B.E., M.E."), e.qZA(), e.TgZ(152, "div", 15)(153, "div", 16)(154, "span", 17), e._uU(155, "5"), e.qZA(), e.TgZ(156, "div", 18), e._UZ(157, "i", 19)(158, "i", 19)(159, "i", 19)(160, "i", 19)(161, "i", 19), e.qZA(), e.TgZ(162, "span", 21), e._uU(163, "(3987 ratings)"), e.qZA()()(), e.TgZ(164, "div", 22)(165, "p")(166, "strong"), e._uU(167, "Lorem Ipsum"), e.qZA(), e._uU(168, "\xa0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."), e._UZ(169, "br"), e.qZA()()(), e.TgZ(170, "div", 23)(171, "div", 24)(172, "div"), e._UZ(173, "i", 25), e._uU(174, " Shanti Nagar Bldg No B 4, Sector No 6, Mira Road"), e.qZA(), e.TgZ(175, "div"), e._UZ(176, "i", 26), e._uU(177, " jacob_ryan "), e.qZA(), e.TgZ(178, "div"), e._UZ(179, "i", 27), e._uU(180, " 123456789 "), e.qZA(), e.TgZ(181, "div"), e._UZ(182, "i", 28), e._uU(183, " jacob@example.com"), e.qZA()()()()()()(), e.TgZ(184, "div", 8)(185, "div", 9)(186, "div", 10)(187, "div", 8)(188, "div", 11), e._UZ(189, "img", 32), e.qZA(), e.TgZ(190, "div", 13)(191, "div", 14)(192, "h4"), e._uU(193, "Ashton Cox"), e.qZA()(), e.TgZ(194, "p"), e._uU(195, "B.C.A., M.C.A."), e.qZA(), e.TgZ(196, "div", 15)(197, "div", 16)(198, "span", 17), e._uU(199, "3"), e.qZA(), e.TgZ(200, "div", 18), e._UZ(201, "i", 19)(202, "i", 19)(203, "i", 19)(204, "i", 20)(205, "i", 20), e.qZA(), e.TgZ(206, "span", 21), e._uU(207, "(34 ratings)"), e.qZA()()(), e.TgZ(208, "div", 22)(209, "p")(210, "strong"), e._uU(211, "Lorem Ipsum"), e.qZA(), e._uU(212, "\xa0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."), e._UZ(213, "br"), e.qZA()()(), e.TgZ(214, "div", 23)(215, "div", 24)(216, "div"), e._UZ(217, "i", 25), e._uU(218, " Shanti Nagar Bldg No B 4, Sector No 6, Mira Road"), e.qZA(), e.TgZ(219, "div"), e._UZ(220, "i", 26), e._uU(221, " ashton_cox "), e.qZA(), e.TgZ(222, "div"), e._UZ(223, "i", 27), e._uU(224, " 123456789 "), e.qZA(), e.TgZ(225, "div"), e._UZ(226, "i", 28), e._uU(227, " ashton@example.com"), e.qZA()()()()()()(), e.TgZ(228, "div", 8)(229, "div", 9)(230, "div", 10)(231, "div", 8)(232, "div", 11), e._UZ(233, "img", 33), e.qZA(), e.TgZ(234, "div", 13)(235, "div", 14)(236, "h4"), e._uU(237, "Angelica Ramos"), e.qZA()(), e.TgZ(238, "p"), e._uU(239, "M. Tech"), e.qZA(), e.TgZ(240, "div", 15)(241, "div", 16)(242, "span", 17), e._uU(243, "5"), e.qZA(), e.TgZ(244, "div", 18), e._UZ(245, "i", 19)(246, "i", 19)(247, "i", 19)(248, "i", 19)(249, "i", 19), e.qZA(), e.TgZ(250, "span", 21), e._uU(251, "(765 ratings)"), e.qZA()()(), e.TgZ(252, "div", 22)(253, "p")(254, "strong"), e._uU(255, "Lorem Ipsum"), e.qZA(), e._uU(256, "\xa0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."), e._UZ(257, "br"), e.qZA()()(), e.TgZ(258, "div", 23)(259, "div", 24)(260, "div"), e._UZ(261, "i", 25), e._uU(262, " Shanti Nagar Bldg No B 4, Sector No 6, Mira Road"), e.qZA(), e.TgZ(263, "div"), e._UZ(264, "i", 26), e._uU(265, " angelica_ramos "), e.qZA(), e.TgZ(266, "div"), e._UZ(267, "i", 27), e._uU(268, " 123456789 "), e.qZA(), e.TgZ(269, "div"), e._UZ(270, "i", 28), e._uU(271, " angelica@example.com"), e.qZA()()()()()()()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "My Team")("items", e.DdM(3, tt))("active_item", "My Team"))
                },
                dependencies: [q.L]
            });
            const at = function() {
                return ["Home"]
            };
            class G {
                constructor() {}
            }
            G.\u0275fac = function(a) {
                return new(a || G)
            }, G.\u0275cmp = e.Xpm({
                type: G,
                selectors: [
                    ["app-settings"]
                ],
                decls: 73,
                vars: 4,
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
                    [1, "col-md-12"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "h2")(7, "strong"), e._uU(8, "Security"), e.qZA(), e._uU(9, " Settings"), e.qZA()(), e.TgZ(10, "div", 6)(11, "div", 7)(12, "mat-form-field", 8)(13, "mat-label"), e._uU(14, "Username"), e.qZA(), e._UZ(15, "input", 9), e.qZA(), e.TgZ(16, "mat-form-field", 8)(17, "mat-label"), e._uU(18, "Current Password"), e.qZA(), e._UZ(19, "input", 10), e.qZA(), e.TgZ(20, "mat-form-field", 8)(21, "mat-label"), e._uU(22, "New Password"), e.qZA(), e._UZ(23, "input", 10), e.qZA()(), e.TgZ(24, "button", 11), e._uU(25, "Save"), e.qZA()()(), e.TgZ(26, "div", 4)(27, "div", 5)(28, "h2")(29, "strong"), e._uU(30, "Account"), e.qZA(), e._uU(31, " Settings"), e.qZA()(), e.TgZ(32, "div", 6)(33, "div", 12)(34, "div", 13)(35, "div", 14)(36, "mat-form-field", 8)(37, "mat-label"), e._uU(38, "First Name"), e.qZA(), e._UZ(39, "input", 9), e.qZA()()(), e.TgZ(40, "div", 13)(41, "div", 14)(42, "mat-form-field", 8)(43, "mat-label"), e._uU(44, "Last Name"), e.qZA(), e._UZ(45, "input", 9), e.qZA()()(), e.TgZ(46, "div", 15)(47, "div", 14)(48, "mat-form-field", 8)(49, "mat-label"), e._uU(50, "City"), e.qZA(), e._UZ(51, "input", 9), e.qZA()()(), e.TgZ(52, "div", 15)(53, "div", 14)(54, "mat-form-field", 8)(55, "mat-label"), e._uU(56, "Email"), e.qZA(), e._UZ(57, "input", 9), e.qZA()()(), e.TgZ(58, "div", 15)(59, "div", 14)(60, "mat-form-field", 8)(61, "mat-label"), e._uU(62, "Country"), e.qZA(), e._UZ(63, "input", 9), e.qZA()()(), e.TgZ(64, "div", 16)(65, "div", 14)(66, "mat-form-field", 8)(67, "mat-label"), e._uU(68, "Address"), e.qZA(), e._UZ(69, "textarea", 9), e.qZA()()(), e.TgZ(70, "div", 16)(71, "button", 11), e._uU(72, "Save Changes"), e.qZA()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "Settings")("items", e.DdM(3, at))("active_item", "Settings"))
                },
                dependencies: [Z.lW, _.KE, _.hX, R.Nt, q.L]
            });
            class it {
                constructor(a) {
                    this.id = a.id || this.getRandomID(), this.halfDay = a.halfDay || "", this.applyDate = a.applyDate || "", this.fromDate = a.fromDate || "", this.toDate = a.toDate || "", this.reason = a.reason || "", this.type = a.type || "", this.status = a.status || ""
                }
                getRandomID() {
                    const a = () => 65536 * (1 + Math.random()) | 0;
                    return a() + a()
                }
            }
            class y extends D.n {
                constructor(a) {
                    super(), this.httpClient = a, this.API_URL = "assets/data/empLeaveReq.json", this.isTblLoading = !0, this.dataChange = new k.X([])
                }
                get data() {
                    return this.dataChange.value
                }
                getDialogData() {
                    return this.dialogData
                }
                getAllMyLeaves() {
                    this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
                        next: a => {
                            this.isTblLoading = !1, this.dataChange.next(a)
                        },
                        error: a => {
                            this.isTblLoading = !1, console.log(a.name + " " + a.message)
                        }
                    })
                }
                addMyLeaves(a) {
                    this.dialogData = a
                }
                updateMyLeaves(a) {
                    this.dialogData = a
                }
                deleteMyLeaves(a) {
                    console.log(a)
                }
            }
            y.\u0275fac = function(a) {
                return new(a || y)(e.LFG(M.eN))
            }, y.\u0275prov = e.Yz7({
                token: y,
                factory: y.\u0275fac
            });
            var ge = c(3238);

            function ot(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Please select date "), e.qZA())
            }

            function nt(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Please select date "), e.qZA())
            }

            function rt(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Please select date "), e.qZA())
            }

            function st(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Half Day required "), e.qZA())
            }

            function lt(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Select Any Type "), e.qZA())
            }

            function ct(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Select Status "), e.qZA())
            }
            class L {
                constructor(a, t, o, n) {
                    this.dialogRef = a, this.data = t, this.myLeavesService = o, this.fb = n, this.formControl = new m.p4("", [m.kI.required]), this.action = t.action, "edit" === this.action ? (this.dialogTitle = "Edit Leave Request", this.myLeaves = t.myLeaves) : (this.dialogTitle = "New Leave Request", this.myLeaves = new it({})), this.myLeavesForm = this.createContactForm()
                }
                getErrorMessage() {
                    return this.formControl.hasError("required") ? "Required field" : this.formControl.hasError("email") ? "Not a valid email" : ""
                }
                createContactForm() {
                    return this.fb.group({
                        id: [this.myLeaves.id],
                        halfDay: [this.myLeaves.halfDay, [m.kI.required]],
                        applyDate: [this.myLeaves.applyDate, [m.kI.required]],
                        fromDate: [this.myLeaves.fromDate, [m.kI.required]],
                        toDate: [this.myLeaves.toDate, [m.kI.required]],
                        type: [this.myLeaves.type, [m.kI.required]],
                        status: [this.myLeaves.status, [m.kI.required]],
                        reason: [this.myLeaves.reason, [m.kI.required]]
                    })
                }
                submit() {}
                onNoClick() {
                    this.dialogRef.close()
                }
                confirmAdd() {
                    this.myLeavesService.addMyLeaves(this.myLeavesForm.getRawValue())
                }
            }
            L.\u0275fac = function(a) {
                return new(a || L)(e.Y36(u.so), e.Y36(u.WI), e.Y36(y), e.Y36(m.QS))
            }, L.\u0275cmp = e.Xpm({
                type: L,
                selectors: [
                    ["app-form-dialog"]
                ],
                decls: 88,
                vars: 24,
                consts: [
                    [1, "addContainer"],
                    [1, "modalHeader"],
                    [1, "editRowModal"],
                    [1, "modalHeader", "clearfix"],
                    [1, "modal-about"],
                    ["mat-icon-button", "", "aria-label", "Close dialog", 1, "modal-close-button", 3, "click"],
                    ["mat-dialog-content", ""],
                    [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"],
                    [1, "row"],
                    [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"],
                    ["appearance", "outline", 1, "example-full-width"],
                    ["matInput", "", "formControlName", "applyDate", "required", "", 3, "matDatepicker"],
                    ["matSuffix", "", 3, "for"],
                    ["picker1", ""],
                    [4, "ngIf"],
                    ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker"],
                    ["picker2", ""],
                    ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker"],
                    ["picker3", ""],
                    ["appearance", "outline", 1, "example-full-width", "mb-3"],
                    ["matInput", "", "formControlName", "halfDay", "required", ""],
                    ["formControlName", "type", "required", ""],
                    [3, "value"],
                    ["formControlName", "status", "required", ""],
                    [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    ["matInput", "", "formControlName", "reason"],
                    ["align", "end", 1, "example-button-row"],
                    ["mat-raised-button", "", "color", "primary", 3, "disabled", "mat-dialog-close", "click"],
                    ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]
                ],
                template: function(a, t) {
                    if (1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), e._uU(5), e.qZA()()(), e.TgZ(6, "button", 5), e.NdJ("click", function() {
                            return t.dialogRef.close()
                        }), e.TgZ(7, "mat-icon"), e._uU(8, "close"), e.qZA()()(), e.TgZ(9, "div", 6)(10, "form", 7), e.NdJ("ngSubmit", function() {
                            return t.submit
                        }), e.TgZ(11, "div", 8)(12, "div", 9)(13, "mat-form-field", 10)(14, "mat-label"), e._uU(15, "Apply date"), e.qZA(), e._UZ(16, "input", 11)(17, "mat-datepicker-toggle", 12)(18, "mat-datepicker", null, 13), e.YNc(20, ot, 2, 0, "mat-error", 14), e.qZA()(), e.TgZ(21, "div", 9)(22, "mat-form-field", 10)(23, "mat-label"), e._uU(24, "From date"), e.qZA(), e._UZ(25, "input", 15)(26, "mat-datepicker-toggle", 12)(27, "mat-datepicker", null, 16), e.YNc(29, nt, 2, 0, "mat-error", 14), e.qZA()()(), e.TgZ(30, "div", 8)(31, "div", 9)(32, "mat-form-field", 10)(33, "mat-label"), e._uU(34, "To date"), e.qZA(), e._UZ(35, "input", 17)(36, "mat-datepicker-toggle", 12)(37, "mat-datepicker", null, 18), e.YNc(39, rt, 2, 0, "mat-error", 14), e.qZA()(), e.TgZ(40, "div", 9)(41, "mat-form-field", 19)(42, "mat-label"), e._uU(43, "Half Day"), e.qZA(), e._UZ(44, "input", 20), e.YNc(45, st, 2, 0, "mat-error", 14), e.qZA()()(), e.TgZ(46, "div", 8)(47, "div", 9)(48, "mat-form-field", 19)(49, "mat-label"), e._uU(50, "Type"), e.qZA(), e.TgZ(51, "mat-select", 21)(52, "mat-option", 22), e._uU(53, " Casual Leave "), e.qZA(), e.TgZ(54, "mat-option", 22), e._uU(55, " Sick Leave "), e.qZA(), e.TgZ(56, "mat-option", 22), e._uU(57, " Privilege Leave "), e.qZA(), e.TgZ(58, "mat-option", 22), e._uU(59, " Marriage Leave "), e.qZA(), e.TgZ(60, "mat-option", 22), e._uU(61, " Maternity Leave "), e.qZA()(), e.YNc(62, lt, 2, 0, "mat-error", 14), e.qZA()(), e.TgZ(63, "div", 9)(64, "mat-form-field", 19)(65, "mat-label"), e._uU(66, "Status"), e.qZA(), e.TgZ(67, "mat-select", 23)(68, "mat-option", 22), e._uU(69, " Approved "), e.qZA(), e.TgZ(70, "mat-option", 22), e._uU(71, " Rejected "), e.qZA(), e.TgZ(72, "mat-option", 22), e._uU(73, " Pending "), e.qZA()(), e.YNc(74, ct, 2, 0, "mat-error", 14), e.qZA()()(), e.TgZ(75, "div", 8)(76, "div", 24)(77, "mat-form-field", 19)(78, "mat-label"), e._uU(79, "Reason"), e.qZA(), e._UZ(80, "textarea", 25), e.qZA()()(), e.TgZ(81, "div", 8)(82, "div", 24)(83, "div", 26)(84, "button", 27), e.NdJ("click", function() {
                            return t.confirmAdd()
                        }), e._uU(85, "Save"), e.qZA(), e.TgZ(86, "button", 28), e.NdJ("click", function() {
                            return t.onNoClick()
                        }), e._uU(87, "Cancel"), e.qZA()()()()()()()), 2 & a) {
                        const o = e.MAs(19),
                            n = e.MAs(28),
                            r = e.MAs(38);
                        let s, p, te, ae, ie, oe;
                        e.xp6(5), e.hij(" ", t.dialogTitle, " "), e.xp6(5), e.Q6J("formGroup", t.myLeavesForm), e.xp6(6), e.Q6J("matDatepicker", o), e.xp6(1), e.Q6J("for", o), e.xp6(3), e.Q6J("ngIf", null == (s = t.myLeavesForm.get("applyDate")) ? null : s.hasError("required")), e.xp6(5), e.Q6J("matDatepicker", n), e.xp6(1), e.Q6J("for", n), e.xp6(3), e.Q6J("ngIf", null == (p = t.myLeavesForm.get("fromDate")) ? null : p.hasError("required")), e.xp6(6), e.Q6J("matDatepicker", r), e.xp6(1), e.Q6J("for", r), e.xp6(3), e.Q6J("ngIf", null == (te = t.myLeavesForm.get("toDate")) ? null : te.hasError("required")), e.xp6(6), e.Q6J("ngIf", null == (ae = t.myLeavesForm.get("halfDay")) ? null : ae.hasError("required")), e.xp6(7), e.Q6J("value", "Casual Leave"), e.xp6(2), e.Q6J("value", "Sick Leave"), e.xp6(2), e.Q6J("value", "Privilege Leave"), e.xp6(2), e.Q6J("value", "Marriage Leave"), e.xp6(2), e.Q6J("value", "Maternity Leave"), e.xp6(2), e.Q6J("ngIf", null == (ie = t.myLeavesForm.get("type")) ? null : ie.hasError("required")), e.xp6(6), e.Q6J("value", "Approved"), e.xp6(2), e.Q6J("value", "Rejected"), e.xp6(2), e.Q6J("value", "Pending"), e.xp6(2), e.Q6J("ngIf", null == (oe = t.myLeavesForm.get("type")) ? null : oe.hasError("required")), e.xp6(10), e.Q6J("disabled", !t.myLeavesForm.valid)("mat-dialog-close", 1)
                    }
                },
                dependencies: [l.O5, m._Y, m.Fj, m.JJ, m.JL, m.Q7, m.sg, m.u, x.Hw, Z.lW, Z.RK, u.ZT, u.xY, _.KE, _.hX, _.TO, _.R9, T.Mq, T.hl, T.nW, N.gD, ge.ey, R.Nt]
            });
            class X {
                constructor(a, t, o) {
                    this.dialogRef = a, this.data = t, this.myLeavesService = o
                }
                onNoClick() {
                    this.dialogRef.close()
                }
                confirmDelete() {
                    console.log(this.data), this.myLeavesService.deleteMyLeaves(this.data.id)
                }
            }
            X.\u0275fac = function(a) {
                return new(a || X)(e.Y36(u.so), e.Y36(u.WI), e.Y36(y))
            }, X.\u0275cmp = e.Xpm({
                type: X,
                selectors: [
                    ["app-delete"]
                ],
                decls: 25,
                vars: 4,
                consts: [
                    [1, "container"],
                    ["mat-dialog-title", ""],
                    ["mat-dialog-content", ""],
                    [1, "clearfix"],
                    [1, "font-weight-bold"],
                    ["mat-dialog-actions", "", 1, "mb-1"],
                    ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"],
                    ["mat-flat-button", "", "tabindex", "-1", 3, "click"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "div", 0)(1, "h3", 1), e._uU(2, "Are you sure?"), e.qZA(), e.TgZ(3, "div", 2)(4, "ul", 3)(5, "li")(6, "p")(7, "span", 4), e._uU(8, " Type: "), e.qZA(), e._uU(9), e.qZA()(), e.TgZ(10, "li")(11, "p")(12, "span", 4), e._uU(13, " Status: "), e.qZA(), e._uU(14), e.qZA()(), e.TgZ(15, "li")(16, "p")(17, "span", 4), e._uU(18, "Details: "), e.qZA(), e._uU(19), e.qZA()()()(), e.TgZ(20, "div", 5)(21, "button", 6), e.NdJ("click", function() {
                        return t.confirmDelete()
                    }), e._uU(22, " Delete "), e.qZA(), e.TgZ(23, "button", 7), e.NdJ("click", function() {
                        return t.onNoClick()
                    }), e._uU(24, "Cancel"), e.qZA()()()), 2 & a && (e.xp6(9), e.Oqu(t.data.type), e.xp6(5), e.Oqu(t.data.status), e.xp6(5), e.hij("", t.data.reason, " "), e.xp6(2), e.Q6J("mat-dialog-close", 1))
                },
                dependencies: [Z.lW, u.ZT, u.uh, u.xY, u.H8]
            });
            var he = c(6035),
                fe = c(1676);
            const dt = ["filter"];

            function mt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-header-cell", 61)(1, "mat-checkbox", 62), e.NdJ("change", function(n) {
                        e.CHM(t);
                        const r = e.oxw();
                        return e.KtG(n ? r.masterToggle() : null)
                    }), e.qZA()()
                }
                if (2 & i) {
                    const t = e.oxw();
                    e.Q6J("ngClass", "tbl-col-width-per-6"), e.xp6(1), e.Q6J("checked", t.selection.hasValue() && t.isAllSelected())("indeterminate", t.selection.hasValue() && !t.isAllSelected())("ngClass", "tbl-checkbox")
                }
            }

            function pt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 61)(1, "mat-checkbox", 63), e.NdJ("click", function(n) {
                        return n.stopPropagation()
                    })("change", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(n ? p.selection.toggle(s) : null)
                    }), e.qZA()()
                }
                if (2 & i) {
                    const t = a.$implicit,
                        o = e.oxw();
                    e.Q6J("ngClass", "tbl-col-width-per-6"), e.xp6(1), e.Q6J("checked", o.selection.isSelected(t))("ngClass", "tbl-checkbox")
                }
            }

            function ut(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "Id"), e.qZA())
            }

            function _t(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Oqu(t.id)
                }
            }

            function gt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "Apply Date"), e.qZA())
            }

            function ht(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 65), e.NdJ("contextmenu", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(p.onContextMenu(n, s))
                    }), e._uU(1), e.ALo(2, "date"), e.qZA()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.applyDate, "MM/dd/yyyy"), " ")
                }
            }

            function ft(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "From Date"), e.qZA())
            }

            function Zt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 65), e.NdJ("contextmenu", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(p.onContextMenu(n, s))
                    }), e._uU(1), e.ALo(2, "date"), e.qZA()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.fromDate, "MM/dd/yyyy"), " ")
                }
            }

            function vt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "To Date"), e.qZA())
            }

            function Tt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 65), e.NdJ("contextmenu", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(p.onContextMenu(n, s))
                    }), e._uU(1), e.ALo(2, "date"), e.qZA()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.toDate, "MM/dd/yyyy"), " ")
                }
            }

            function bt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "Half Day"), e.qZA())
            }

            function yt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 65), e.NdJ("contextmenu", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(p.onContextMenu(n, s))
                    }), e._uU(1), e.qZA()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.halfDay, "")
                }
            }

            function At(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "Type "), e.qZA())
            }

            function xt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 65), e.NdJ("contextmenu", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(p.onContextMenu(n, s))
                    }), e._uU(1), e.qZA()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.type, "")
                }
            }

            function Ct(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, " Status "), e.qZA())
            }

            function Ut(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 68), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function qt(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 69), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function kt(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 70), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function Dt(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 66), e.YNc(1, Ut, 3, 1, "div", 67), e.YNc(2, qt, 3, 1, "div", 67), e.YNc(3, kt, 3, 1, "div", 67), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Q6J("ngIf", "Approved" === t.status), e.xp6(1), e.Q6J("ngIf", "Rejected" === t.status), e.xp6(1), e.Q6J("ngIf", "Pending" === t.status)
                }
            }

            function Mt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 64), e._uU(1, "Reason "), e.qZA())
            }

            function wt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 71), e.NdJ("contextmenu", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(p.onContextMenu(n, s))
                    }), e._uU(1), e.qZA()
                }
                if (2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.reason, "")
                }
            }

            function Nt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 72), e._uU(1, "Actions"), e.qZA())
            }

            function St(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 72)(1, "button", 73), e.NdJ("click", function(n) {
                        return n.stopPropagation()
                    })("click", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.editCall(r))
                    }), e._UZ(2, "app-feather-icons", 74), e.qZA(), e.TgZ(3, "button", 75), e.NdJ("click", function(n) {
                        return n.stopPropagation()
                    })("click", function() {
                        const n = e.CHM(t),
                            r = n.index,
                            s = n.$implicit,
                            p = e.oxw();
                        return e.KtG(p.deleteItem(r, s))
                    }), e._UZ(4, "app-feather-icons", 74), e.qZA()()
                }
                2 & i && (e.xp6(2), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"))
            }

            function Lt(i, a) {
                1 & i && e._UZ(0, "mat-header-row")
            }

            function jt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-row", 76), e.NdJ("click", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.editCall(r))
                    }), e.qZA()
                }
                2 & i && e.Udp("cursor", "pointer")
            }

            function Jt(i, a) {
                1 & i && (e.TgZ(0, "div", 77), e._UZ(1, "mat-progress-spinner", 78), e.qZA()), 2 & i && (e.xp6(1), e.Q6J("diameter", 40))
            }

            function Yt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 79), e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw();
                        return e.KtG(n.addNew())
                    }), e.TgZ(1, "mat-icon"), e._uU(2, "add_box"), e.qZA(), e.TgZ(3, "span"), e._uU(4, "Add Record"), e.qZA()(), e.TgZ(5, "button", 79), e.NdJ("click", function() {
                        const r = e.CHM(t).item,
                            s = e.oxw();
                        return e.KtG(s.editCall(r))
                    }), e.TgZ(6, "mat-icon"), e._uU(7, "create"), e.qZA(), e.TgZ(8, "span"), e._uU(9, "Edit Record"), e.qZA()(), e.TgZ(10, "button", 79), e.NdJ("click", function() {
                        const r = e.CHM(t).item,
                            s = e.oxw();
                        return e.KtG(s.deleteItem(r.id, r))
                    }), e.TgZ(11, "mat-icon"), e._uU(12, "delete"), e.qZA(), e.TgZ(13, "span"), e._uU(14, "Delete Record"), e.qZA()(), e.TgZ(15, "button", 79), e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw();
                        return e.KtG(n.refresh())
                    }), e.TgZ(16, "mat-icon"), e._uU(17, "refresh"), e.qZA(), e.TgZ(18, "span"), e._uU(19, "Refresh Record"), e.qZA()(), e.TgZ(20, "button", 80)(21, "mat-icon"), e._uU(22, "no_encryption"), e.qZA(), e.TgZ(23, "span"), e._uU(24, "Disable"), e.qZA()(), e.TgZ(25, "button", 81)(26, "mat-icon"), e._uU(27, "list_alt"), e.qZA(), e.TgZ(28, "span"), e._uU(29, " Nested Menu"), e.qZA()()
                }
                if (2 & i) {
                    e.oxw();
                    const t = e.MAs(82);
                    e.xp6(25), e.Q6J("matMenuTriggerFor", t)
                }
            }

            function It(i, a) {
                if (1 & i && (e.TgZ(0, "div", 82), e._uU(1, " No results "), e.qZA()), 2 & i) {
                    const t = e.oxw();
                    e.Udp("display", 0 === t.dataSource.renderedData.length ? "" : "none")
                }
            }
            const Qt = function() {
                    return ["Home"]
                },
                Rt = function() {
                    return [5, 10, 25, 100]
                };
            class $ extends D.n {
                constructor(a, t, o, n) {
                    super(), this.httpClient = a, this.dialog = t, this.myLeavesService = o, this.snackBar = n, this.displayedColumns = ["select", "applyDate", "fromDate", "toDate", "halfDay", "type", "status", "reason", "actions"], this.selection = new b.Ov(!0, []), this.contextMenuPosition = {
                        x: "0px",
                        y: "0px"
                    }
                }
                ngOnInit() {
                    this.loadData()
                }
                refresh() {
                    this.loadData()
                }
                addNew() {
                    let a;
                    a = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr";
                    const t = this.dialog.open(L, {
                        data: {
                            myLeaves: this.myLeaves,
                            action: "add"
                        },
                        direction: a
                    });
                    this.subs.sink = t.afterClosed().subscribe(o => {
                        1 === o && (this.exampleDatabase ? .dataChange.value.unshift(this.myLeavesService.getDialogData()), this.refreshTable(), this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center"))
                    })
                }
                editCall(a) {
                    let t;
                    this.id = a.id, t = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr";
                    const o = this.dialog.open(L, {
                        data: {
                            myLeaves: a,
                            action: "edit"
                        },
                        direction: t
                    });
                    this.subs.sink = o.afterClosed().subscribe(n => {
                        if (1 === n) {
                            const r = this.exampleDatabase ? .dataChange.value.findIndex(s => s.id === this.id);
                            r && this.exampleDatabase && (this.exampleDatabase.dataChange.value[r] = this.myLeavesService.getDialogData(), this.refreshTable(), this.showNotification("black", "Edit Record Successfully...!!!", "bottom", "center"))
                        }
                    })
                }
                deleteItem(a, t) {
                    let o;
                    this.index = a, this.id = t.id, o = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr";
                    const n = this.dialog.open(X, {
                        height: "270px",
                        width: "300px",
                        data: t,
                        direction: o
                    });
                    this.subs.sink = n.afterClosed().subscribe(r => {
                        if (1 === r) {
                            const s = this.exampleDatabase ? .dataChange.value.findIndex(p => p.id === this.id);
                            void 0 !== s && void 0 !== this.exampleDatabase && (this.exampleDatabase ? .dataChange.value.splice(s, 1), this.refreshTable(), this.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center"))
                        }
                    })
                }
                refreshTable() {
                    this.paginator._changePageSize(this.paginator.pageSize)
                }
                isAllSelected() {
                    return this.selection.selected.length === this.dataSource.renderedData.length
                }
                masterToggle() {
                    this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(a => this.selection.select(a))
                }
                removeSelectedRows() {
                    const a = this.selection.selected.length;
                    this.selection.selected.forEach(t => {
                        const o = this.dataSource.renderedData.findIndex(n => n === t);
                        this.exampleDatabase ? .dataChange.value.splice(o, 1), this.refreshTable(), this.selection = new b.Ov(!0, [])
                    }), this.showNotification("snackbar-danger", a + " Record Delete Successfully...!!!", "bottom", "center")
                }
                loadData() {
                    this.exampleDatabase = new y(this.httpClient), this.dataSource = new Pt(this.exampleDatabase, this.paginator, this.sort), this.subs.sink = (0, ce.R)(this.filter.nativeElement, "keyup").subscribe(() => {
                        this.dataSource && (this.dataSource.filter = this.filter.nativeElement.value)
                    })
                }
                exportExcel() {
                    const a = this.dataSource.filteredData.map(t => ({
                        "Apply Date": (0, l.p6)(new Date(t.applyDate), "yyyy-MM-dd", "en") || "",
                        "From Date": (0, l.p6)(new Date(t.fromDate), "yyyy-MM-dd", "en") || "",
                        "To Date": (0, l.p6)(new Date(t.toDate), "yyyy-MM-dd", "en") || "",
                        "Half Day": t.halfDay,
                        Type: t.type,
                        Status: t.status,
                        Reason: t.reason
                    }));
                    he.c.exportToExcel(a, "excel")
                }
                showNotification(a, t, o, n) {
                    this.snackBar.open(t, "", {
                        duration: 2e3,
                        verticalPosition: o,
                        horizontalPosition: n,
                        panelClass: a
                    })
                }
                onContextMenu(a, t) {
                    a.preventDefault(), this.contextMenuPosition.x = a.clientX + "px", this.contextMenuPosition.y = a.clientY + "px", void 0 !== this.contextMenu && null !== this.contextMenu.menu && (this.contextMenu.menuData = {
                        item: t
                    }, this.contextMenu.menu.focusFirstItem("mouse"), this.contextMenu.openMenu())
                }
            }
            $.\u0275fac = function(a) {
                return new(a || $)(e.Y36(M.eN), e.Y36(u.uw), e.Y36(y), e.Y36(w.ux))
            }, $.\u0275cmp = e.Xpm({
                type: $,
                selectors: [
                    ["app-my-leaves"]
                ],
                viewQuery: function(a, t) {
                    if (1 & a && (e.Gf(v.NW, 7), e.Gf(g.YE, 7), e.Gf(dt, 7), e.Gf(f.p6, 5)), 2 & a) {
                        let o;
                        e.iGM(o = e.CRH()) && (t.paginator = o.first), e.iGM(o = e.CRH()) && (t.sort = o.first), e.iGM(o = e.CRH()) && (t.filter = o.first), e.iGM(o = e.CRH()) && (t.contextMenu = o.first)
                    }
                },
                features: [e.qOj],
                decls: 101,
                vars: 20,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"],
                    [1, "card"],
                    [1, "body"],
                    [1, "responsive_table"],
                    [1, "materialTableHeader"],
                    [1, "col-8"],
                    [1, "header-buttons-left", "ms-0"],
                    [1, "tbl-title"],
                    [1, "tbl-search-box"],
                    ["for", "search-input"],
                    [1, "material-icons", "search-icon"],
                    ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"],
                    ["filter", ""],
                    [1, "tbl-header-btn"],
                    ["matTooltip", "ADD", 1, "m-l-10"],
                    ["mat-mini-fab", "", "color", "primary", 3, "click"],
                    [1, "col-white"],
                    ["matTooltip", "REFRESH", 1, "m-l-10"],
                    ["matTooltip", "DELETE", 1, "m-l-10", 3, "hidden"],
                    ["mat-mini-fab", "", "color", "warn", 3, "click"],
                    [1, "col-4"],
                    [1, "tbl-export-btn"],
                    ["matTooltip", "XLSX", 1, "export-button", "m-l-10"],
                    ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"],
                    ["matSort", "", 1, "mat-cell", 3, "dataSource"],
                    ["table", ""],
                    ["matColumnDef", "select"],
                    [3, "ngClass", 4, "matHeaderCellDef"],
                    [3, "ngClass", 4, "matCellDef"],
                    ["matColumnDef", "id"],
                    ["mat-sort-header", "", 4, "matHeaderCellDef"],
                    [4, "matCellDef"],
                    ["matColumnDef", "applyDate"],
                    [3, "contextmenu", 4, "matCellDef"],
                    ["matColumnDef", "fromDate"],
                    ["matColumnDef", "toDate"],
                    ["matColumnDef", "halfDay"],
                    ["matColumnDef", "type"],
                    ["matColumnDef", "status"],
                    ["mat-cell", "", 4, "matCellDef"],
                    ["matColumnDef", "reason"],
                    ["class", "column-nowrap", 3, "contextmenu", 4, "matCellDef"],
                    ["matColumnDef", "actions"],
                    ["class", "pr-0", 4, "matHeaderCellDef"],
                    ["class", "pr-0", 4, "matCellDef"],
                    [4, "matHeaderRowDef"],
                    ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"],
                    ["class", "tbl-spinner", 4, "ngIf"],
                    [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"],
                    ["contextMenu", "matMenu"],
                    ["matMenuContent", ""],
                    ["nestedmenu", "matMenu"],
                    ["mat-menu-item", ""],
                    ["class", "no-results", 3, "display", 4, "ngIf"],
                    [3, "length", "pageIndex", "pageSize", "pageSizeOptions"],
                    ["paginator", ""],
                    [3, "ngClass"],
                    [3, "checked", "indeterminate", "ngClass", "change"],
                    [3, "checked", "ngClass", "click", "change"],
                    ["mat-sort-header", ""],
                    [3, "contextmenu"],
                    ["mat-cell", ""],
                    [4, "ngIf"],
                    [1, "badge", "badge-pill", "badge-primary", "col-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-red"],
                    [1, "badge", "badge-pill", "badge-primary", "col-blue"],
                    [1, "column-nowrap", 3, "contextmenu"],
                    [1, "pr-0"],
                    ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit", 1, "tbl-action-btn", 3, "click"],
                    [3, "icon"],
                    ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete", 1, "tbl-action-btn", 3, "click"],
                    ["matRipple", "", 3, "click"],
                    [1, "tbl-spinner"],
                    ["color", "primary", "mode", "indeterminate", 3, "diameter"],
                    ["mat-menu-item", "", 3, "click"],
                    ["mat-menu-item", "", "disabled", ""],
                    ["mat-menu-item", "", 3, "matMenuTriggerFor"],
                    [1, "no-results"]
                ],
                template: function(a, t) {
                    if (1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 4)(11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "h2"), e._uU(15, "My Leaves"), e.qZA()(), e.TgZ(16, "li", 13)(17, "label", 14)(18, "i", 15), e._uU(19, "search"), e.qZA()(), e._UZ(20, "input", 16, 17), e.qZA(), e.TgZ(22, "li", 18)(23, "div", 19)(24, "button", 20), e.NdJ("click", function() {
                            return t.addNew()
                        }), e.TgZ(25, "mat-icon", 21), e._uU(26, "add"), e.qZA()()()(), e.TgZ(27, "li", 18)(28, "div", 22)(29, "button", 20), e.NdJ("click", function() {
                            return t.refresh()
                        }), e.TgZ(30, "mat-icon", 21), e._uU(31, "refresh"), e.qZA()()()(), e.TgZ(32, "li", 18)(33, "div", 23)(34, "button", 24), e.NdJ("click", function() {
                            return t.removeSelectedRows()
                        }), e.TgZ(35, "mat-icon", 21), e._uU(36, "delete "), e.qZA()()()()()(), e.TgZ(37, "div", 25)(38, "ul", 26)(39, "li")(40, "div", 27)(41, "img", 28), e.NdJ("click", function() {
                            return t.exportExcel()
                        }), e.qZA()()()()()()(), e.TgZ(42, "mat-table", 29, 30), e.ynx(44, 31), e.YNc(45, mt, 2, 4, "mat-header-cell", 32), e.YNc(46, pt, 2, 3, "mat-cell", 33), e.BQk(), e.ynx(47, 34), e.YNc(48, ut, 2, 0, "mat-header-cell", 35), e.YNc(49, _t, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(50, 37), e.YNc(51, gt, 2, 0, "mat-header-cell", 35), e.YNc(52, ht, 3, 4, "mat-cell", 38), e.BQk(), e.ynx(53, 39), e.YNc(54, ft, 2, 0, "mat-header-cell", 35), e.YNc(55, Zt, 3, 4, "mat-cell", 38), e.BQk(), e.ynx(56, 40), e.YNc(57, vt, 2, 0, "mat-header-cell", 35), e.YNc(58, Tt, 3, 4, "mat-cell", 38), e.BQk(), e.ynx(59, 41), e.YNc(60, bt, 2, 0, "mat-header-cell", 35), e.YNc(61, yt, 2, 1, "mat-cell", 38), e.BQk(), e.ynx(62, 42), e.YNc(63, At, 2, 0, "mat-header-cell", 35), e.YNc(64, xt, 2, 1, "mat-cell", 38), e.BQk(), e.ynx(65, 43), e.YNc(66, Ct, 2, 0, "mat-header-cell", 35), e.YNc(67, Dt, 4, 3, "mat-cell", 44), e.BQk(), e.ynx(68, 45), e.YNc(69, Mt, 2, 0, "mat-header-cell", 35), e.YNc(70, wt, 2, 1, "mat-cell", 46), e.BQk(), e.ynx(71, 47), e.YNc(72, Nt, 2, 0, "mat-header-cell", 48), e.YNc(73, St, 5, 6, "mat-cell", 49), e.BQk(), e.YNc(74, Lt, 1, 0, "mat-header-row", 50), e.YNc(75, jt, 1, 2, "mat-row", 51), e.qZA(), e.YNc(76, Jt, 2, 1, "div", 52), e._UZ(77, "div", 53), e.TgZ(78, "mat-menu", null, 54), e.YNc(80, Yt, 30, 1, "ng-template", 55), e.qZA(), e.TgZ(81, "mat-menu", null, 56)(83, "button", 57)(84, "mat-icon"), e._uU(85, "mail_outline"), e.qZA(), e.TgZ(86, "span"), e._uU(87, "Item 1"), e.qZA()(), e.TgZ(88, "button", 57)(89, "mat-icon"), e._uU(90, "call"), e.qZA(), e.TgZ(91, "span"), e._uU(92, "Item 2"), e.qZA()(), e.TgZ(93, "button", 57)(94, "mat-icon"), e._uU(95, "chat"), e.qZA(), e.TgZ(96, "span"), e._uU(97, "Item 3"), e.qZA()()(), e.YNc(98, It, 2, 2, "div", 58), e._UZ(99, "mat-paginator", 59, 60), e.qZA()()()()()()()), 2 & a) {
                        const o = e.MAs(79);
                        e.xp6(3), e.Q6J("title", "My Leaves")("items", e.DdM(18, Qt))("active_item", "My Leaves"), e.xp6(30), e.Q6J("hidden", !t.selection.hasValue()), e.xp6(9), e.Q6J("dataSource", t.dataSource), e.xp6(32), e.Q6J("matHeaderRowDef", t.displayedColumns), e.xp6(1), e.Q6J("matRowDefColumns", t.displayedColumns), e.xp6(1), e.Q6J("ngIf", null == t.exampleDatabase ? null : t.exampleDatabase.isTblLoading), e.xp6(1), e.Udp("left", t.contextMenuPosition.x)("top", t.contextMenuPosition.y), e.Q6J("matMenuTriggerFor", o), e.xp6(21), e.Q6J("ngIf", !(null != t.exampleDatabase && t.exampleDatabase.isTblLoading)), e.xp6(1), e.Q6J("length", t.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", e.DdM(19, Rt))
                    }
                },
                dependencies: [l.mk, l.O5, x.Hw, Z.RK, Z.nh, v.NW, g.YE, g.nU, f.VK, f.OP, f.KA, f.p6, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, le.oG, P.gM, F.Ou, q.L, fe.A, l.uU]
            });
            class Pt extends b.o2 {
                get filter() {
                    return this.filterChange.value
                }
                set filter(a) {
                    this.filterChange.next(a)
                }
                constructor(a, t, o) {
                    super(), this.exampleDatabase = a, this.paginator = t, this._sort = o, this.filterChange = new k.X(""), this.filteredData = [], this.renderedData = [], this.filterChange.subscribe(() => this.paginator.pageIndex = 0)
                }
                connect() {
                    const a = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
                    return this.exampleDatabase.getAllMyLeaves(), (0, de.T)(...a).pipe((0, me.U)(() => {
                        this.filteredData = this.exampleDatabase.data.slice().filter(n => -1 !== (n.type + n.halfDay + n.applyDate + n.reason).toLowerCase().indexOf(this.filter.toLowerCase()));
                        const t = this.sortData(this.filteredData.slice());
                        return this.renderedData = t.splice(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize), this.renderedData
                    }))
                }
                disconnect() {}
                sortData(a) {
                    return this._sort.active && "" !== this._sort.direction ? a.sort((t, o) => {
                        let n = "",
                            r = "";
                        switch (this._sort.active) {
                            case "id":
                                [n, r] = [t.id, o.id];
                                break;
                            case "type":
                                [n, r] = [t.type, o.type];
                                break;
                            case "status":
                                [n, r] = [t.status, o.status];
                                break;
                            case "applyDate":
                                [n, r] = [t.applyDate, o.applyDate];
                                break;
                            case "fromDate":
                                [n, r] = [t.fromDate, o.fromDate]
                        }
                        return ((isNaN(+n) ? n : +n) < (isNaN(+r) ? r : +r) ? -1 : 1) * ("asc" === this._sort.direction ? 1 : -1)
                    }) : a
                }
            }
            class U extends D.n {
                constructor(a) {
                    super(), this.httpClient = a, this.API_URL = "assets/data/my-projects.json", this.isTblLoading = !0, this.dataChange = new k.X([])
                }
                get data() {
                    return this.dataChange.value
                }
                getDialogData() {
                    return this.dialogData
                }
                getAllMyProjectss() {
                    this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
                        next: a => {
                            this.isTblLoading = !1, this.dataChange.next(a)
                        },
                        error: a => {
                            this.isTblLoading = !1, console.log(a.name + " " + a.message)
                        }
                    })
                }
                addMyProjects(a) {
                    this.dialogData = a
                }
                updateMyProjects(a) {
                    this.dialogData = a
                }
                deleteMyProjects(a) {
                    console.log(a)
                }
            }

            function Ft(i, a) {
                1 & i && (e.TgZ(0, "span", 22), e._uU(1, "High"), e.qZA())
            }

            function Et(i, a) {
                1 & i && (e.TgZ(0, "span", 23), e._uU(1, "Medium"), e.qZA())
            }

            function Ot(i, a) {
                1 & i && (e.TgZ(0, "span", 24), e._uU(1, "Low"), e.qZA())
            }

            function Bt(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 25), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw(2);
                    e.xp6(2), e.hij(" ", t.myProjects.status, "")
                }
            }

            function Ht(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 26), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw(2);
                    e.xp6(2), e.hij(" ", t.myProjects.status, "")
                }
            }

            function Gt(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 27), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw(2);
                    e.xp6(2), e.hij(" ", t.myProjects.status, "")
                }
            }

            function Xt(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4), e._uU(3), e.qZA(), e.TgZ(4, "button", 5), e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw();
                        return e.KtG(n.dialogRef.close())
                    }), e.TgZ(5, "mat-icon"), e._uU(6, "close"), e.qZA()()(), e.TgZ(7, "div", 6)(8, "mat-card-content")(9, "div", 7)(10, "div", 8), e._uU(11, "Client Name:"), e.qZA(), e.TgZ(12, "div", 9), e._uU(13), e.qZA(), e.TgZ(14, "div", 8), e._uU(15, "Project Start Date:"), e.qZA(), e.TgZ(16, "div", 9)(17, "span", 10), e._uU(18, " date_range "), e.qZA(), e._uU(19), e.ALo(20, "date"), e.qZA(), e.TgZ(21, "div", 8), e._uU(22, "Project End Date:"), e.qZA(), e.TgZ(23, "div", 9)(24, "span", 10), e._uU(25, " date_range "), e.qZA(), e._uU(26), e.ALo(27, "date"), e.qZA(), e.TgZ(28, "div", 8), e._uU(29, "Project DeadLine:"), e.qZA(), e.TgZ(30, "div", 9)(31, "span", 10), e._uU(32, " date_range "), e.qZA(), e._uU(33), e.ALo(34, "date"), e.qZA(), e.TgZ(35, "div", 8), e._uU(36, "Team:"), e.qZA(), e.TgZ(37, "div", 11)(38, "ul", 12)(39, "li", 13), e._UZ(40, "img", 14), e.qZA(), e.TgZ(41, "li", 13), e._UZ(42, "img", 15), e.qZA(), e.TgZ(43, "li", 13), e._UZ(44, "img", 16), e.qZA(), e.TgZ(45, "li", 13)(46, "span", 17), e._uU(47, "+4"), e.qZA()()()(), e.TgZ(48, "div", 8), e._uU(49, "Priority:"), e.qZA(), e.TgZ(50, "div", 18), e.YNc(51, Ft, 2, 0, "ng-template", 19), e.YNc(52, Et, 2, 0, "ng-template", 19), e.YNc(53, Ot, 2, 0, "ng-template", 19), e.qZA(), e.TgZ(54, "div", 8), e._uU(55, "Comments:"), e.qZA(), e.TgZ(56, "div", 9), e._uU(57, "25"), e.qZA(), e.TgZ(58, "div", 8), e._uU(59, "Bug:"), e.qZA(), e.TgZ(60, "div", 9), e._uU(61, "11"), e.qZA(), e.TgZ(62, "div", 8), e._uU(63, "Progress:"), e.qZA(), e.TgZ(64, "div", 18), e._UZ(65, "mat-progress-bar", 20), e.qZA(), e.TgZ(66, "div", 8), e._uU(67, "Status:"), e.qZA(), e.TgZ(68, "div", 18), e.YNc(69, Bt, 3, 1, "div", 21), e.YNc(70, Ht, 3, 1, "div", 21), e.YNc(71, Gt, 3, 1, "div", 21), e.qZA(), e.TgZ(72, "div", 8), e._uU(73, "Project Details:"), e.qZA(), e.TgZ(74, "div", 9), e._uU(75), e.qZA()()()()()
                }
                if (2 & i) {
                    const t = e.oxw();
                    e.xp6(3), e.Oqu(t.myProjects.title), e.xp6(10), e.Oqu(t.myProjects.title), e.xp6(6), e.Oqu(e.lcZ(20, 13, t.myProjects.startDate)), e.xp6(7), e.Oqu(e.lcZ(27, 15, t.myProjects.endDate)), e.xp6(7), e.Oqu(e.lcZ(34, 17, t.myProjects.deadLine)), e.xp6(18), e.Q6J("ngIf", "1" === t.myProjects.priority), e.xp6(1), e.Q6J("ngIf", "0" === t.myProjects.priority), e.xp6(1), e.Q6J("ngIf", "-1" === t.myProjects.priority), e.xp6(12), e.s9C("value", t.myProjects.progress), e.xp6(4), e.Q6J("ngIf", "Active" === t.myProjects.status), e.xp6(1), e.Q6J("ngIf", "Hold" === t.myProjects.status), e.xp6(1), e.Q6J("ngIf", "Deactive" === t.myProjects.status), e.xp6(4), e.Oqu(t.myProjects.details)
                }
            }
            U.\u0275fac = function(a) {
                return new(a || U)(e.LFG(M.eN))
            }, U.\u0275prov = e.Yz7({
                token: U,
                factory: U.\u0275fac
            });
            class z {
                constructor(a, t, o) {
                    this.dialogRef = a, this.data = t, this.myProjectsService = o, this.isDetails = !1, this.myProjects = t.myProjects, this.isDetails = !0
                }
                submit() {}
                onNoClick() {
                    this.dialogRef.close()
                }
            }
            z.\u0275fac = function(a) {
                return new(a || z)(e.Y36(u.so), e.Y36(u.WI), e.Y36(U))
            }, z.\u0275cmp = e.Xpm({
                type: z,
                selectors: [
                    ["app-form"]
                ],
                decls: 2,
                vars: 1,
                consts: [
                    [1, "addContainer"],
                    ["class", "contact-details", 4, "ngIf"],
                    [1, "contact-details"],
                    [1, "modalHeader"],
                    [1, "contact-details-name", "mb-2"],
                    ["mat-icon-button", "", "aria-label", "Close dialog", 1, "modal-close-button", 3, "click"],
                    ["mat-dialog-content", ""],
                    [1, "row", "mt-5", 2, "width", "98%"],
                    [1, "col-5", "m-b-10"],
                    [1, "col-7", "pro-left", "m-b-10"],
                    [1, "material-icons-outlined", "project-icon2"],
                    [1, "col-7", "pro-left"],
                    [1, "list-unstyled", "order-list"],
                    [1, "avatar", "avatar-sm"],
                    ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"],
                    [1, "badge"],
                    [1, "col-7", "pro-lef", "mb-2"],
                    [3, "ngIf"],
                    ["mode", "determinate", 2, "width", "50%", 3, "value"],
                    [4, "ngIf"],
                    [1, "badge", "badge-solid-red"],
                    [1, "badge", "badge-solid-blue"],
                    [1, "badge", "badge-solid-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-orange"],
                    [1, "badge", "badge-pill", "badge-primary", "col-red"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "div", 0), e.YNc(1, Xt, 76, 19, "div", 1), e.qZA()), 2 & a && (e.xp6(1), e.Q6J("ngIf", t.isDetails))
                },
                dependencies: [l.O5, x.Hw, Z.RK, u.xY, Q.dn, ue.pW, l.uU]
            });
            const $t = ["filter"];

            function zt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, "ID "), e.qZA())
            }

            function Wt(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Oqu(t.id)
                }
            }

            function Kt(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, "Project Title "), e.qZA())
            }

            function Vt(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.title, " ")
                }
            }

            function ea(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, "Client Name "), e.qZA())
            }

            function ta(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.clientName, " ")
                }
            }

            function aa(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, "Start Date "), e.qZA())
            }

            function ia(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.ALo(2, "date"), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.startDate, "MM/dd/yyyy"), " ")
                }
            }

            function oa(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, "End Date "), e.qZA())
            }

            function na(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.ALo(2, "date"), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.endDate, "MM/dd/yyyy"), " ")
                }
            }

            function ra(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, "DeadLine "), e.qZA())
            }

            function sa(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.ALo(2, "date"), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.deadLine, "MM/dd/yyyy"), " ")
                }
            }

            function la(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, " Members "), e.qZA())
            }

            function ca(i, a) {
                1 & i && (e.TgZ(0, "mat-cell", 42)(1, "ul", 43)(2, "li", 44), e._UZ(3, "img", 45), e.qZA(), e.TgZ(4, "li", 44), e._UZ(5, "img", 46), e.qZA(), e.TgZ(6, "li", 44), e._UZ(7, "img", 47), e.qZA()()())
            }

            function da(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, " Priority "), e.qZA())
            }

            function ma(i, a) {
                1 & i && (e.TgZ(0, "div")(1, "span", 49), e._uU(2, "High"), e.qZA()())
            }

            function pa(i, a) {
                1 & i && (e.TgZ(0, "div")(1, "span", 50), e._uU(2, "Medium"), e.qZA()())
            }

            function ua(i, a) {
                1 & i && (e.TgZ(0, "div")(1, "span", 51), e._uU(2, "Low"), e.qZA()())
            }

            function _a(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 42), e.YNc(1, ma, 3, 0, "div", 48), e.YNc(2, pa, 3, 0, "div", 48), e.YNc(3, ua, 3, 0, "div", 48), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Q6J("ngIf", "1" === t.priority), e.xp6(1), e.Q6J("ngIf", "0" === t.priority), e.xp6(1), e.Q6J("ngIf", "-1" === t.priority)
                }
            }

            function ga(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, " Progress "), e.qZA())
            }

            function ha(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 42), e._UZ(1, "mat-progress-bar", 52), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.s9C("value", t.progress)
                }
            }

            function fa(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 41), e._uU(1, " Status "), e.qZA())
            }

            function Za(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 53), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function va(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 54), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function Ta(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 55), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function ba(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 42), e.YNc(1, Za, 3, 1, "div", 48), e.YNc(2, va, 3, 1, "div", 48), e.YNc(3, Ta, 3, 1, "div", 48), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Q6J("ngIf", "Active" === t.status), e.xp6(1), e.Q6J("ngIf", "Hold" === t.status), e.xp6(1), e.Q6J("ngIf", "Deactive" === t.status)
                }
            }

            function ya(i, a) {
                1 & i && e._UZ(0, "mat-header-row")
            }

            function Aa(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-row", 56), e.NdJ("click", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.detailsCall(r))
                    }), e.qZA()
                }
                2 & i && e.Udp("cursor", "pointer")
            }

            function xa(i, a) {
                1 & i && (e.TgZ(0, "div", 57), e._UZ(1, "mat-progress-spinner", 58), e.qZA()), 2 & i && (e.xp6(1), e.Q6J("diameter", 40))
            }

            function Ca(i, a) {
                if (1 & i && (e.TgZ(0, "div", 59), e._uU(1, " No results "), e.qZA()), 2 & i) {
                    const t = e.oxw();
                    e.Udp("display", 0 === t.dataSource.renderedData.length ? "" : "none")
                }
            }
            const Ua = function() {
                    return ["Home"]
                },
                qa = function() {
                    return [5, 10, 25, 100]
                };
            class W extends D.n {
                constructor(a, t, o, n) {
                    super(), this.httpClient = a, this.dialog = t, this.myProjectsService = o, this.snackBar = n, this.filterToggle = !1, this.displayedColumns = ["id", "title", "clientName", "startDate", "endDate", "deadLine", "noOfMembers", "priority", "progress", "status"], this.selection = new b.Ov(!0, []), this.contextMenuPosition = {
                        x: "0px",
                        y: "0px"
                    }
                }
                ngOnInit() {
                    this.loadData()
                }
                detailsCall(a) {
                    this.dialog.open(z, {
                        data: {
                            myProjects: a,
                            action: "details"
                        },
                        height: "70%",
                        width: "35%"
                    })
                }
                toggleStar(a) {
                    console.log(a)
                }
                loadData() {
                    this.exampleDatabase = new U(this.httpClient), this.dataSource = new ka(this.exampleDatabase, this.paginator, this.sort), this.subs.sink = (0, ce.R)(this.filter.nativeElement, "keyup").subscribe(() => {
                        this.dataSource && (this.dataSource.filter = this.filter.nativeElement.value)
                    })
                }
            }
            W.\u0275fac = function(a) {
                return new(a || W)(e.Y36(M.eN), e.Y36(u.uw), e.Y36(U), e.Y36(w.ux))
            }, W.\u0275cmp = e.Xpm({
                type: W,
                selectors: [
                    ["app-my-projects"]
                ],
                viewQuery: function(a, t) {
                    if (1 & a && (e.Gf(v.NW, 7), e.Gf(g.YE, 7), e.Gf($t, 7), e.Gf(f.p6, 5)), 2 & a) {
                        let o;
                        e.iGM(o = e.CRH()) && (t.paginator = o.first), e.iGM(o = e.CRH()) && (t.sort = o.first), e.iGM(o = e.CRH()) && (t.filter = o.first), e.iGM(o = e.CRH()) && (t.contextMenu = o.first)
                    }
                },
                features: [e.qOj],
                decls: 63,
                vars: 14,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-md-12"],
                    [1, "tabbable-line"],
                    [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"],
                    [1, "card"],
                    [1, "body"],
                    [1, "responsive_table"],
                    [1, "materialTableHeader"],
                    [1, "col-8"],
                    [1, "header-buttons-left", "ms-0"],
                    [1, "tbl-title"],
                    [1, "tbl-search-box"],
                    ["for", "search-input"],
                    [1, "material-icons", "search-icon"],
                    ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"],
                    ["filter", ""],
                    ["matSort", "", 1, "mat-cell", 3, "dataSource"],
                    ["table", ""],
                    ["matColumnDef", "id"],
                    ["mat-sort-header", "", 4, "matHeaderCellDef"],
                    [4, "matCellDef"],
                    ["matColumnDef", "title"],
                    ["matColumnDef", "clientName"],
                    ["matColumnDef", "startDate"],
                    ["matColumnDef", "endDate"],
                    ["matColumnDef", "deadLine"],
                    ["matColumnDef", "noOfMembers"],
                    ["mat-cell", "", 4, "matCellDef"],
                    ["matColumnDef", "priority"],
                    ["matColumnDef", "progress"],
                    ["matColumnDef", "status"],
                    [4, "matHeaderRowDef"],
                    ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"],
                    ["class", "tbl-spinner", 4, "ngIf"],
                    ["class", "no-results", 3, "display", 4, "ngIf"],
                    [3, "length", "pageIndex", "pageSize", "pageSizeOptions"],
                    ["paginator", ""],
                    ["mat-sort-header", ""],
                    ["mat-cell", ""],
                    [1, "list-unstyled", "order-list", "mb-0"],
                    [1, "avatar", "avatar-sm"],
                    ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"],
                    [4, "ngIf"],
                    [1, "badge", "badge-solid-red"],
                    [1, "badge", "badge-solid-blue"],
                    [1, "badge", "badge-solid-green"],
                    ["mode", "determinate", 2, "width", "80%", 3, "value"],
                    [1, "badge", "badge-pill", "badge-primary", "col-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-orange"],
                    [1, "badge", "badge-pill", "badge-primary", "col-red"],
                    ["matRipple", "", 3, "click"],
                    [1, "tbl-spinner"],
                    ["color", "primary", "mode", "indeterminate", 3, "diameter"],
                    [1, "no-results"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 4)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 4)(14, "div", 12)(15, "ul", 13)(16, "li", 14)(17, "h2"), e._uU(18, "My Projects"), e.qZA()(), e.TgZ(19, "li", 15)(20, "label", 16)(21, "i", 17), e._uU(22, "search"), e.qZA()(), e._UZ(23, "input", 18, 19), e.qZA()()()()(), e.TgZ(25, "mat-table", 20, 21), e.ynx(27, 22), e.YNc(28, zt, 2, 0, "mat-header-cell", 23), e.YNc(29, Wt, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(30, 25), e.YNc(31, Kt, 2, 0, "mat-header-cell", 23), e.YNc(32, Vt, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(33, 26), e.YNc(34, ea, 2, 0, "mat-header-cell", 23), e.YNc(35, ta, 2, 1, "mat-cell", 24), e.BQk(), e.ynx(36, 27), e.YNc(37, aa, 2, 0, "mat-header-cell", 23), e.YNc(38, ia, 3, 4, "mat-cell", 24), e.BQk(), e.ynx(39, 28), e.YNc(40, oa, 2, 0, "mat-header-cell", 23), e.YNc(41, na, 3, 4, "mat-cell", 24), e.BQk(), e.ynx(42, 29), e.YNc(43, ra, 2, 0, "mat-header-cell", 23), e.YNc(44, sa, 3, 4, "mat-cell", 24), e.BQk(), e.ynx(45, 30), e.YNc(46, la, 2, 0, "mat-header-cell", 23), e.YNc(47, ca, 8, 0, "mat-cell", 31), e.BQk(), e.ynx(48, 32), e.YNc(49, da, 2, 0, "mat-header-cell", 23), e.YNc(50, _a, 4, 3, "mat-cell", 31), e.BQk(), e.ynx(51, 33), e.YNc(52, ga, 2, 0, "mat-header-cell", 23), e.YNc(53, ha, 2, 1, "mat-cell", 31), e.BQk(), e.ynx(54, 34), e.YNc(55, fa, 2, 0, "mat-header-cell", 23), e.YNc(56, ba, 4, 3, "mat-cell", 31), e.BQk(), e.YNc(57, ya, 1, 0, "mat-header-row", 35), e.YNc(58, Aa, 1, 2, "mat-row", 36), e.qZA(), e.YNc(59, xa, 2, 1, "div", 37), e.YNc(60, Ca, 2, 2, "div", 38), e._UZ(61, "mat-paginator", 39, 40), e.qZA()()()()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "My Projects")("items", e.DdM(12, Ua))("active_item", "My Projects"), e.xp6(22), e.Q6J("dataSource", t.dataSource), e.xp6(32), e.Q6J("matHeaderRowDef", t.displayedColumns), e.xp6(1), e.Q6J("matRowDefColumns", t.displayedColumns), e.xp6(1), e.Q6J("ngIf", null == t.exampleDatabase ? null : t.exampleDatabase.isTblLoading), e.xp6(1), e.Q6J("ngIf", !(null != t.exampleDatabase && t.exampleDatabase.isTblLoading)), e.xp6(1), e.Q6J("length", t.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", e.DdM(13, qa)))
                },
                dependencies: [l.O5, v.NW, g.YE, g.nU, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, ue.pW, F.Ou, q.L, l.uU]
            });
            class ka extends b.o2 {
                get filter() {
                    return this.filterChange.value
                }
                set filter(a) {
                    this.filterChange.next(a)
                }
                constructor(a, t, o) {
                    super(), this.exampleDatabase = a, this.paginator = t, this._sort = o, this.filterChange = new k.X(""), this.filteredData = [], this.renderedData = [], this.filterChange.subscribe(() => this.paginator.pageIndex = 0)
                }
                connect() {
                    const a = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
                    return this.exampleDatabase.getAllMyProjectss(), (0, de.T)(...a).pipe((0, me.U)(() => {
                        this.filteredData = this.exampleDatabase.data.slice().filter(n => -1 !== (n.clientName + n.startDate + n.endDate + n.deadLine + n.status + n.priority).toLowerCase().indexOf(this.filter.toLowerCase()));
                        const t = this.sortData(this.filteredData.slice());
                        return this.renderedData = t.splice(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize), this.renderedData
                    }))
                }
                disconnect() {}
                sortData(a) {
                    return this._sort.active && "" !== this._sort.direction ? a.sort((t, o) => {
                        let n = "",
                            r = "";
                        switch (this._sort.active) {
                            case "id":
                                [n, r] = [t.id, o.id];
                                break;
                            case "clientName":
                                [n, r] = [t.clientName, o.clientName];
                                break;
                            case "startDate":
                                [n, r] = [t.startDate, o.startDate];
                                break;
                            case "endDate":
                                [n, r] = [t.endDate, o.endDate];
                                break;
                            case "status":
                                [n, r] = [t.status, o.status];
                                break;
                            case "noOfMembers":
                                [n, r] = [t.noOfMembers, o.noOfMembers]
                        }
                        return ((isNaN(+n) ? n : +n) < (isNaN(+r) ? r : +r) ? -1 : 1) * ("asc" === this._sort.direction ? 1 : -1)
                    }) : a
                }
            }
            class Da {
                constructor(a) {
                    this.id = a.id || this.getRandomID(), this.taskNo = a.taskNo || "", this.project = a.project || "", this.client = a.client || "", this.status = a.status || "", this.priority = a.priority || "", this.type = a.type || "", this.executor = a.executor || "", this.date = (0, l.p6)(new Date, "yyyy-MM-dd", "en") || "", this.details = a.details || ""
                }
                getRandomID() {
                    const a = () => 65536 * (1 + Math.random()) | 0;
                    return a() + a()
                }
            }
            class A extends D.n {
                constructor(a) {
                    super(), this.httpClient = a, this.API_URL = "assets/data/my-tasks.json", this.isTblLoading = !0, this.dataChange = new k.X([])
                }
                get data() {
                    return this.dataChange.value
                }
                getDialogData() {
                    return this.dialogData
                }
                getAllMyTaskss() {
                    this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
                        next: a => {
                            this.isTblLoading = !1, this.dataChange.next(a)
                        },
                        error: a => {
                            this.isTblLoading = !1, console.log(a.name + " " + a.message)
                        }
                    })
                }
                addMyTasks(a) {
                    this.dialogData = a
                }
                updateMyTasks(a) {
                    this.dialogData = a
                }
                deleteMyTasks(a) {
                    console.log(a)
                }
            }

            function Ma(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Task No is required "), e.qZA())
            }

            function wa(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Project is required "), e.qZA())
            }

            function Na(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " client is required "), e.qZA())
            }

            function Sa(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Select task status "), e.qZA())
            }

            function La(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Select priority "), e.qZA())
            }

            function ja(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Select task type "), e.qZA())
            }

            function Ja(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Executor is required "), e.qZA())
            }

            function Ya(i, a) {
                1 & i && (e.TgZ(0, "mat-error"), e._uU(1, " Please select date "), e.qZA())
            }
            A.\u0275fac = function(a) {
                return new(a || A)(e.LFG(M.eN))
            }, A.\u0275prov = e.Yz7({
                token: A,
                factory: A.\u0275fac
            });
            class j {
                constructor(a, t, o, n) {
                    this.dialogRef = a, this.data = t, this.myTasksService = o, this.fb = n, this.formControl = new m.p4("", [m.kI.required]), this.action = t.action, "edit" === this.action ? (this.dialogTitle = t.myTasks.taskNo, this.myTasks = t.myTasks) : (this.dialogTitle = "New MyTasks", this.myTasks = new Da({})), this.myTasksForm = this.createContactForm()
                }
                getErrorMessage() {
                    return this.formControl.hasError("required") ? "Required field" : this.formControl.hasError("email") ? "Not a valid email" : ""
                }
                createContactForm() {
                    return this.fb.group({
                        id: [this.myTasks.id],
                        taskNo: [this.myTasks.taskNo],
                        project: [this.myTasks.project],
                        client: [this.myTasks.client],
                        status: [this.myTasks.status],
                        priority: [this.myTasks.priority],
                        type: [this.myTasks.type],
                        executor: [this.myTasks.executor],
                        date: [(0, l.p6)(this.myTasks.date, "yyyy-MM-dd", "en"), [m.kI.required]],
                        details: [this.myTasks.details]
                    })
                }
                submit() {}
                onNoClick() {
                    this.dialogRef.close()
                }
                confirmAdd() {
                    this.myTasksService.addMyTasks(this.myTasksForm.getRawValue())
                }
            }
            j.\u0275fac = function(a) {
                return new(a || j)(e.Y36(u.so), e.Y36(u.WI), e.Y36(A), e.Y36(m.QS))
            }, j.\u0275cmp = e.Xpm({
                type: j,
                selectors: [
                    ["app-form-dialog"]
                ],
                decls: 103,
                vars: 22,
                consts: [
                    [1, "addContainer"],
                    [1, "modalHeader"],
                    [1, "editRowModal"],
                    [1, "modalHeader", "clearfix"],
                    [1, "modal-about"],
                    ["mat-icon-button", "", "aria-label", "Close dialog", 1, "modal-close-button", 3, "click"],
                    ["mat-dialog-content", ""],
                    [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"],
                    [1, "row"],
                    [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"],
                    ["appearance", "outline", 1, "example-full-width"],
                    ["matInput", "", "formControlName", "taskNo", "required", ""],
                    ["matSuffix", ""],
                    [4, "ngIf"],
                    ["matInput", "", "formControlName", "project", "required", ""],
                    ["matInput", "", "formControlName", "client", "required", ""],
                    ["appearance", "outline", 1, "example-full-width", "mb-3"],
                    ["formControlName", "status", "required", ""],
                    [3, "value"],
                    ["formControlName", "priority", "required", ""],
                    ["formControlName", "type", "required", ""],
                    ["matInput", "", "formControlName", "executor", "required", ""],
                    ["matInput", "", "formControlName", "date", 3, "matDatepicker"],
                    ["matSuffix", "", 3, "for"],
                    ["picker", ""],
                    [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    ["matInput", "", "formControlName", "details"],
                    ["align", "end", 1, "example-button-row"],
                    ["mat-raised-button", "", "color", "primary", 3, "disabled", "mat-dialog-close", "click"],
                    ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]
                ],
                template: function(a, t) {
                    if (1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), e._uU(5), e.qZA()()(), e.TgZ(6, "button", 5), e.NdJ("click", function() {
                            return t.dialogRef.close()
                        }), e.TgZ(7, "mat-icon"), e._uU(8, "close"), e.qZA()()(), e.TgZ(9, "div", 6)(10, "form", 7), e.NdJ("ngSubmit", function() {
                            return t.submit
                        }), e.TgZ(11, "div", 8)(12, "div", 9)(13, "mat-form-field", 10)(14, "mat-label"), e._uU(15, "Task No"), e.qZA(), e._UZ(16, "input", 11), e.TgZ(17, "mat-icon", 12), e._uU(18, "task_alt"), e.qZA(), e.YNc(19, Ma, 2, 0, "mat-error", 13), e.qZA()(), e.TgZ(20, "div", 9)(21, "mat-form-field", 10)(22, "mat-label"), e._uU(23, "Project"), e.qZA(), e._UZ(24, "input", 14), e.TgZ(25, "mat-icon", 12), e._uU(26, "business_center"), e.qZA(), e.YNc(27, wa, 2, 0, "mat-error", 13), e.qZA()()(), e.TgZ(28, "div", 8)(29, "div", 9)(30, "mat-form-field", 10)(31, "mat-label"), e._uU(32, "Client"), e.qZA(), e._UZ(33, "input", 15), e.TgZ(34, "mat-icon", 12), e._uU(35, "person_outline"), e.qZA(), e.YNc(36, Na, 2, 0, "mat-error", 13), e.qZA()(), e.TgZ(37, "div", 9)(38, "mat-form-field", 16)(39, "mat-label"), e._uU(40, "Status"), e.qZA(), e.TgZ(41, "mat-select", 17)(42, "mat-option", 18), e._uU(43, " Open "), e.qZA(), e.TgZ(44, "mat-option", 18), e._uU(45, " Closed "), e.qZA()(), e.YNc(46, Sa, 2, 0, "mat-error", 13), e.qZA()()(), e.TgZ(47, "div", 8)(48, "div", 9)(49, "mat-form-field", 16)(50, "mat-label"), e._uU(51, "Priority"), e.qZA(), e.TgZ(52, "mat-select", 19)(53, "mat-option", 18), e._uU(54, " High "), e.qZA(), e.TgZ(55, "mat-option", 18), e._uU(56, " Medium "), e.qZA(), e.TgZ(57, "mat-option", 18), e._uU(58, " Low "), e.qZA()(), e.YNc(59, La, 2, 0, "mat-error", 13), e.qZA()(), e.TgZ(60, "div", 9)(61, "mat-form-field", 16)(62, "mat-label"), e._uU(63, "type"), e.qZA(), e.TgZ(64, "mat-select", 20)(65, "mat-option", 18), e._uU(66, " Bug "), e.qZA(), e.TgZ(67, "mat-option", 18), e._uU(68, " Error "), e.qZA(), e.TgZ(69, "mat-option", 18), e._uU(70, " Development "), e.qZA()(), e.YNc(71, ja, 2, 0, "mat-error", 13), e.qZA()()(), e.TgZ(72, "div", 8)(73, "div", 9)(74, "mat-form-field", 10)(75, "mat-label"), e._uU(76, "Executor"), e.qZA(), e._UZ(77, "input", 21), e.TgZ(78, "mat-icon", 12), e._uU(79, "person_outline"), e.qZA(), e.YNc(80, Ja, 2, 0, "mat-error", 13), e.qZA()(), e.TgZ(81, "div", 9)(82, "mat-form-field", 10)(83, "mat-label"), e._uU(84, "Date"), e.qZA(), e._UZ(85, "input", 22)(86, "mat-datepicker-toggle", 23)(87, "mat-datepicker", null, 24), e.YNc(89, Ya, 2, 0, "mat-error", 13), e.qZA()()(), e.TgZ(90, "div", 8)(91, "div", 25)(92, "mat-form-field", 16)(93, "mat-label"), e._uU(94, "Details"), e.qZA(), e._UZ(95, "textarea", 26), e.qZA()()(), e.TgZ(96, "div", 8)(97, "div", 25)(98, "div", 27)(99, "button", 28), e.NdJ("click", function() {
                            return t.confirmAdd()
                        }), e._uU(100, "Save"), e.qZA(), e.TgZ(101, "button", 29), e.NdJ("click", function() {
                            return t.onNoClick()
                        }), e._uU(102, "Cancel"), e.qZA()()()()()()()), 2 & a) {
                        const o = e.MAs(88);
                        let n, r, s, p, te, ae, ie, oe;
                        e.xp6(5), e.hij(" ", t.dialogTitle, " "), e.xp6(5), e.Q6J("formGroup", t.myTasksForm), e.xp6(9), e.Q6J("ngIf", null == (n = t.myTasksForm.get("taskNo")) ? null : n.hasError("required")), e.xp6(8), e.Q6J("ngIf", null == (r = t.myTasksForm.get("project")) ? null : r.hasError("required")), e.xp6(9), e.Q6J("ngIf", null == (s = t.myTasksForm.get("client")) ? null : s.hasError("required")), e.xp6(6), e.Q6J("value", "Open"), e.xp6(2), e.Q6J("value", "Closed"), e.xp6(2), e.Q6J("ngIf", null == (p = t.myTasksForm.get("status")) ? null : p.hasError("required")), e.xp6(7), e.Q6J("value", "High"), e.xp6(2), e.Q6J("value", "Medium"), e.xp6(2), e.Q6J("value", "Low"), e.xp6(2), e.Q6J("ngIf", null == (te = t.myTasksForm.get("priority")) ? null : te.hasError("required")), e.xp6(6), e.Q6J("value", "Bug"), e.xp6(2), e.Q6J("value", "Error"), e.xp6(2), e.Q6J("value", "Development"), e.xp6(2), e.Q6J("ngIf", null == (ae = t.myTasksForm.get("type")) ? null : ae.hasError("required")), e.xp6(9), e.Q6J("ngIf", null == (ie = t.myTasksForm.get("executor")) ? null : ie.hasError("required")), e.xp6(5), e.Q6J("matDatepicker", o), e.xp6(1), e.Q6J("for", o), e.xp6(3), e.Q6J("ngIf", null == (oe = t.myTasksForm.get("date")) ? null : oe.hasError("required")), e.xp6(10), e.Q6J("disabled", !t.myTasksForm.valid)("mat-dialog-close", 1)
                    }
                },
                dependencies: [l.O5, m._Y, m.Fj, m.JJ, m.JL, m.Q7, m.sg, m.u, x.Hw, Z.lW, Z.RK, u.ZT, u.xY, _.KE, _.hX, _.TO, _.R9, T.Mq, T.hl, T.nW, N.gD, ge.ey, R.Nt]
            });
            class K {
                constructor(a, t, o) {
                    this.dialogRef = a, this.data = t, this.myTasksService = o
                }
                onNoClick() {
                    this.dialogRef.close()
                }
                confirmDelete() {
                    this.myTasksService.deleteMyTasks(this.data.id)
                }
            }
            K.\u0275fac = function(a) {
                return new(a || K)(e.Y36(u.so), e.Y36(u.WI), e.Y36(A))
            }, K.\u0275cmp = e.Xpm({
                type: K,
                selectors: [
                    ["app-delete"]
                ],
                decls: 25,
                vars: 4,
                consts: [
                    [1, "container"],
                    ["mat-dialog-title", ""],
                    ["mat-dialog-content", ""],
                    [1, "clearfix"],
                    [1, "font-weight-bold"],
                    ["mat-dialog-actions", "", 1, "mb-1"],
                    ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"],
                    ["mat-flat-button", "", "tabindex", "-1", 3, "click"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "div", 0)(1, "h3", 1), e._uU(2, "Are you sure?"), e.qZA(), e.TgZ(3, "div", 2)(4, "ul", 3)(5, "li")(6, "p")(7, "span", 4), e._uU(8, " Task No: "), e.qZA(), e._uU(9), e.qZA()(), e.TgZ(10, "li")(11, "p")(12, "span", 4), e._uU(13, " Project: "), e.qZA(), e._uU(14), e.qZA()(), e.TgZ(15, "li")(16, "p")(17, "span", 4), e._uU(18, "Status: "), e.qZA(), e._uU(19), e.qZA()()()(), e.TgZ(20, "div", 5)(21, "button", 6), e.NdJ("click", function() {
                        return t.confirmDelete()
                    }), e._uU(22, " Delete "), e.qZA(), e.TgZ(23, "button", 7), e.NdJ("click", function() {
                        return t.onNoClick()
                    }), e._uU(24, "Cancel"), e.qZA()()()), 2 & a && (e.xp6(9), e.Oqu(t.data.taskNo), e.xp6(5), e.Oqu(t.data.project), e.xp6(5), e.hij("", t.data.status, " "), e.xp6(2), e.Q6J("mat-dialog-close", 1))
                },
                dependencies: [Z.lW, u.ZT, u.uh, u.xY, u.H8]
            });
            const Ia = ["filter"];

            function Qa(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-header-cell", 56)(1, "mat-checkbox", 57), e.NdJ("change", function(n) {
                        e.CHM(t);
                        const r = e.oxw();
                        return e.KtG(n ? r.masterToggle() : null)
                    }), e.qZA()()
                }
                if (2 & i) {
                    const t = e.oxw();
                    e.Q6J("ngClass", "tbl-col-width-per-6"), e.xp6(1), e.Q6J("checked", t.selection.hasValue() && t.isAllSelected())("indeterminate", t.selection.hasValue() && !t.isAllSelected())("ngClass", "tbl-checkbox")
                }
            }

            function Ra(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 56)(1, "mat-checkbox", 58), e.NdJ("click", function(n) {
                        return n.stopPropagation()
                    })("change", function(n) {
                        const s = e.CHM(t).$implicit,
                            p = e.oxw();
                        return e.KtG(n ? p.selection.toggle(s) : null)
                    }), e.qZA()()
                }
                if (2 & i) {
                    const t = a.$implicit,
                        o = e.oxw();
                    e.Q6J("ngClass", "tbl-col-width-per-6"), e.xp6(1), e.Q6J("checked", o.selection.isSelected(t))("ngClass", "tbl-checkbox")
                }
            }

            function Pa(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Id"), e.qZA())
            }

            function Fa(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Oqu(t.id)
                }
            }

            function Ea(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Task No"), e.qZA())
            }

            function Oa(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.taskNo, "")
                }
            }

            function Ba(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Project"), e.qZA())
            }

            function Ha(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.project, "")
                }
            }

            function Ga(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Client"), e.qZA())
            }

            function Xa(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.client, "")
                }
            }

            function $a(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, " Status "), e.qZA())
            }

            function za(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 62), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function Wa(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 63), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.status, "")
                }
            }

            function Ka(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 60), e.YNc(1, za, 3, 1, "div", 61), e.YNc(2, Wa, 3, 1, "div", 61), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Q6J("ngIf", "Open" === t.status), e.xp6(1), e.Q6J("ngIf", "Closed" === t.status)
                }
            }

            function Va(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, " Priority "), e.qZA())
            }

            function ei(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 64), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.priority, "")
                }
            }

            function ti(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 65), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.priority, "")
                }
            }

            function ai(i, a) {
                if (1 & i && (e.TgZ(0, "div")(1, "span", 66), e._uU(2), e.qZA()()), 2 & i) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.priority, "")
                }
            }

            function ii(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell", 60), e.YNc(1, ei, 3, 1, "div", 61), e.YNc(2, ti, 3, 1, "div", 61), e.YNc(3, ai, 3, 1, "div", 61), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.Q6J("ngIf", "Low" === t.priority), e.xp6(1), e.Q6J("ngIf", "Medium" === t.priority), e.xp6(1), e.Q6J("ngIf", "High" === t.priority)
                }
            }

            function oi(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Type"), e.qZA())
            }

            function ni(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.type, "")
                }
            }

            function ri(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Executor"), e.qZA())
            }

            function si(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", t.executor, "")
                }
            }

            function li(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Joining Date"), e.qZA())
            }

            function ci(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell"), e._uU(1), e.ALo(2, "date"), e.qZA()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(1), e.hij(" ", e.xi3(2, 1, t.date, "MM/dd/yyyy"), "")
                }
            }

            function di(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 59), e._uU(1, "Details"), e.qZA())
            }

            function mi(i, a) {
                if (1 & i && (e.TgZ(0, "mat-cell")(1, "span", 67), e._uU(2), e.qZA()()), 2 & i) {
                    const t = a.$implicit;
                    e.xp6(2), e.Oqu(t.details)
                }
            }

            function pi(i, a) {
                1 & i && (e.TgZ(0, "mat-header-cell", 68), e._uU(1, "Actions"), e.qZA())
            }

            function ui(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-cell", 68)(1, "button", 69), e.NdJ("click", function(n) {
                        return n.stopPropagation()
                    })("click", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.editCall(r))
                    }), e._UZ(2, "app-feather-icons", 70), e.qZA(), e.TgZ(3, "button", 71), e.NdJ("click", function(n) {
                        return n.stopPropagation()
                    })("click", function() {
                        const n = e.CHM(t),
                            r = n.index,
                            s = n.$implicit,
                            p = e.oxw();
                        return e.KtG(p.deleteItem(r, s))
                    }), e._UZ(4, "app-feather-icons", 70), e.qZA()()
                }
                2 & i && (e.xp6(2), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"))
            }

            function _i(i, a) {
                1 & i && e._UZ(0, "mat-header-row")
            }

            function gi(i, a) {
                if (1 & i) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-row", 72), e.NdJ("click", function() {
                        const r = e.CHM(t).$implicit,
                            s = e.oxw();
                        return e.KtG(s.editCall(r))
                    }), e.qZA()
                }
                2 & i && e.Udp("cursor", "pointer")
            }

            function hi(i, a) {
                1 & i && (e.TgZ(0, "div", 73), e._UZ(1, "mat-progress-spinner", 74), e.qZA()), 2 & i && (e.xp6(1), e.Q6J("diameter", 40))
            }

            function fi(i, a) {
                if (1 & i && (e.TgZ(0, "div", 75), e._uU(1, " No results "), e.qZA()), 2 & i) {
                    const t = e.oxw();
                    e.Udp("display", 0 === t.dataSource.renderedData.length ? "" : "none")
                }
            }
            const Zi = function() {
                    return ["Home"]
                },
                vi = function() {
                    return [5, 10, 25, 100]
                };
            class V extends D.n {
                constructor(a, t, o, n) {
                    super(), this.httpClient = a, this.dialog = t, this.myTasksService = o, this.snackBar = n, this.displayedColumns = ["select", "taskNo", "project", "client", "status", "type", "priority", "executor", "date", "details", "actions"], this.selection = new b.Ov(!0, [])
                }
                ngOnInit() {
                    this.loadData()
                }
                refresh() {
                    this.loadData()
                }
                addNew() {
                    let a;
                    a = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr";
                    const t = this.dialog.open(j, {
                        data: {
                            myTasks: this.myTasks,
                            action: "add"
                        },
                        direction: a
                    });
                    this.subs.sink = t.afterClosed().subscribe(o => {
                        1 === o && (this.exampleDatabase ? .dataChange.value.unshift(this.myTasksService.getDialogData()), this.refreshTable(), this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center"))
                    })
                }
                editCall(a) {
                    let t;
                    this.id = a.id, t = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr";
                    const o = this.dialog.open(j, {
                        data: {
                            myTasks: a,
                            action: "edit"
                        },
                        direction: t
                    });
                    this.subs.sink = o.afterClosed().subscribe(n => {
                        if (1 === n) {
                            const r = this.exampleDatabase ? .dataChange.value.findIndex(s => s.id === this.id);
                            r && this.exampleDatabase && (this.exampleDatabase.dataChange.value[r] = this.myTasksService.getDialogData(), this.refreshTable(), this.showNotification("black", "Edit Record Successfully...!!!", "bottom", "center"))
                        }
                    })
                }
                deleteItem(a, t) {
                    let o;
                    this.index = a, this.id = t.id, o = "true" === localStorage.getItem("isRtl") ? "rtl" : "ltr";
                    const n = this.dialog.open(K, {
                        height: "270px",
                        width: "300px",
                        data: t,
                        direction: o
                    });
                    this.subs.sink = n.afterClosed().subscribe(r => {
                        if (1 === r) {
                            const s = this.exampleDatabase ? .dataChange.value.findIndex(p => p.id === this.id);
                            void 0 !== s && void 0 !== this.exampleDatabase && (this.exampleDatabase ? .dataChange.value.splice(s, 1), this.refreshTable(), this.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center"))
                        }
                    })
                }
                refreshTable() {
                    this.paginator._changePageSize(this.paginator.pageSize)
                }
                isAllSelected() {
                    return this.selection.selected.length === this.dataSource.renderedData.length
                }
                masterToggle() {
                    this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(a => this.selection.select(a))
                }
                removeSelectedRows() {
                    const a = this.selection.selected.length;
                    this.selection.selected.forEach(t => {
                        const o = this.dataSource.renderedData.findIndex(n => n === t);
                        this.exampleDatabase ? .dataChange.value.splice(o, 1), this.refreshTable(), this.selection = new b.Ov(!0, [])
                    }), this.showNotification("snackbar-danger", a + " Record Delete Successfully...!!!", "bottom", "center")
                }
                loadData() {
                    this.exampleDatabase = new A(this.httpClient), this.dataSource = new Ti(this.exampleDatabase, this.paginator, this.sort), this.subs.sink = (0, ce.R)(this.filter.nativeElement, "keyup").subscribe(() => {
                        this.dataSource && (this.dataSource.filter = this.filter.nativeElement.value)
                    })
                }
                exportExcel() {
                    const a = this.dataSource.filteredData.map(t => ({
                        "Task No": t.taskNo,
                        Project: t.project,
                        Client: t.client,
                        Status: t.status,
                        Priority: t.priority,
                        Type: t.type,
                        Executor: t.executor,
                        "Joining Date": (0, l.p6)(new Date(t.date), "yyyy-MM-dd", "en") || "",
                        Details: t.details
                    }));
                    he.c.exportToExcel(a, "excel")
                }
                showNotification(a, t, o, n) {
                    this.snackBar.open(t, "", {
                        duration: 2e3,
                        verticalPosition: o,
                        horizontalPosition: n,
                        panelClass: a
                    })
                }
            }
            V.\u0275fac = function(a) {
                return new(a || V)(e.Y36(M.eN), e.Y36(u.uw), e.Y36(A), e.Y36(w.ux))
            }, V.\u0275cmp = e.Xpm({
                type: V,
                selectors: [
                    ["app-my-tasks"]
                ],
                viewQuery: function(a, t) {
                    if (1 & a && (e.Gf(v.NW, 7), e.Gf(g.YE, 7), e.Gf(Ia, 7)), 2 & a) {
                        let o;
                        e.iGM(o = e.CRH()) && (t.paginator = o.first), e.iGM(o = e.CRH()) && (t.sort = o.first), e.iGM(o = e.CRH()) && (t.filter = o.first)
                    }
                },
                features: [e.qOj],
                decls: 86,
                vars: 15,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"],
                    [1, "card"],
                    [1, "body"],
                    [1, "responsive_table"],
                    [1, "materialTableHeader"],
                    [1, "col-8"],
                    [1, "header-buttons-left", "ms-0"],
                    [1, "tbl-title"],
                    [1, "tbl-search-box"],
                    ["for", "search-input"],
                    [1, "material-icons", "search-icon"],
                    ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"],
                    ["filter", ""],
                    [1, "tbl-header-btn"],
                    ["matTooltip", "ADD", 1, "m-l-10"],
                    ["mat-mini-fab", "", "color", "primary", 3, "click"],
                    [1, "col-white"],
                    ["matTooltip", "REFRESH", 1, "m-l-10"],
                    ["matTooltip", "DELETE", 1, "m-l-10", 3, "hidden"],
                    ["mat-mini-fab", "", "color", "warn", 3, "click"],
                    [1, "col-4"],
                    [1, "tbl-export-btn"],
                    ["matTooltip", "XLSX", 1, "export-button", "m-l-10"],
                    ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"],
                    ["matSort", "", 1, "mat-cell", 3, "dataSource"],
                    ["table", ""],
                    ["matColumnDef", "select"],
                    [3, "ngClass", 4, "matHeaderCellDef"],
                    [3, "ngClass", 4, "matCellDef"],
                    ["matColumnDef", "id"],
                    ["mat-sort-header", "", 4, "matHeaderCellDef"],
                    [4, "matCellDef"],
                    ["matColumnDef", "taskNo"],
                    ["matColumnDef", "project"],
                    ["matColumnDef", "client"],
                    ["matColumnDef", "status"],
                    ["mat-cell", "", 4, "matCellDef"],
                    ["matColumnDef", "priority"],
                    ["matColumnDef", "type"],
                    ["matColumnDef", "executor"],
                    ["matColumnDef", "date"],
                    ["matColumnDef", "details"],
                    ["matColumnDef", "actions"],
                    ["class", "pr-0", 4, "matHeaderCellDef"],
                    ["class", "pr-0", 4, "matCellDef"],
                    [4, "matHeaderRowDef"],
                    ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"],
                    ["class", "tbl-spinner", 4, "ngIf"],
                    ["class", "no-results", 3, "display", 4, "ngIf"],
                    [3, "length", "pageIndex", "pageSize", "pageSizeOptions"],
                    ["paginator", ""],
                    [3, "ngClass"],
                    [3, "checked", "indeterminate", "ngClass", "change"],
                    [3, "checked", "ngClass", "click", "change"],
                    ["mat-sort-header", ""],
                    ["mat-cell", ""],
                    [4, "ngIf"],
                    [1, "badge", "badge-solid-red"],
                    [1, "badge", "badge-solid-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-green"],
                    [1, "badge", "badge-pill", "badge-primary", "col-blue"],
                    [1, "badge", "badge-pill", "badge-primary", "col-red"],
                    [1, "truncate-text"],
                    [1, "pr-0"],
                    ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit", 1, "tbl-action-btn", 3, "click"],
                    [3, "icon"],
                    ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete", 1, "tbl-action-btn", 3, "click"],
                    ["matRipple", "", 3, "click"],
                    [1, "tbl-spinner"],
                    ["color", "primary", "mode", "indeterminate", 3, "diameter"],
                    [1, "no-results"]
                ],
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 4)(11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "h2"), e._uU(15, "My Tasks"), e.qZA()(), e.TgZ(16, "li", 13)(17, "label", 14)(18, "i", 15), e._uU(19, "search"), e.qZA()(), e._UZ(20, "input", 16, 17), e.qZA(), e.TgZ(22, "li", 18)(23, "div", 19)(24, "button", 20), e.NdJ("click", function() {
                        return t.addNew()
                    }), e.TgZ(25, "mat-icon", 21), e._uU(26, "add"), e.qZA()()()(), e.TgZ(27, "li", 18)(28, "div", 22)(29, "button", 20), e.NdJ("click", function() {
                        return t.refresh()
                    }), e.TgZ(30, "mat-icon", 21), e._uU(31, "refresh"), e.qZA()()()(), e.TgZ(32, "li", 18)(33, "div", 23)(34, "button", 24), e.NdJ("click", function() {
                        return t.removeSelectedRows()
                    }), e.TgZ(35, "mat-icon", 21), e._uU(36, "delete "), e.qZA()()()()()(), e.TgZ(37, "div", 25)(38, "ul", 26)(39, "li")(40, "div", 27)(41, "img", 28), e.NdJ("click", function() {
                        return t.exportExcel()
                    }), e.qZA()()()()()()(), e.TgZ(42, "mat-table", 29, 30), e.ynx(44, 31), e.YNc(45, Qa, 2, 4, "mat-header-cell", 32), e.YNc(46, Ra, 2, 3, "mat-cell", 33), e.BQk(), e.ynx(47, 34), e.YNc(48, Pa, 2, 0, "mat-header-cell", 35), e.YNc(49, Fa, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(50, 37), e.YNc(51, Ea, 2, 0, "mat-header-cell", 35), e.YNc(52, Oa, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(53, 38), e.YNc(54, Ba, 2, 0, "mat-header-cell", 35), e.YNc(55, Ha, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(56, 39), e.YNc(57, Ga, 2, 0, "mat-header-cell", 35), e.YNc(58, Xa, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(59, 40), e.YNc(60, $a, 2, 0, "mat-header-cell", 35), e.YNc(61, Ka, 3, 2, "mat-cell", 41), e.BQk(), e.ynx(62, 42), e.YNc(63, Va, 2, 0, "mat-header-cell", 35), e.YNc(64, ii, 4, 3, "mat-cell", 41), e.BQk(), e.ynx(65, 43), e.YNc(66, oi, 2, 0, "mat-header-cell", 35), e.YNc(67, ni, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(68, 44), e.YNc(69, ri, 2, 0, "mat-header-cell", 35), e.YNc(70, si, 2, 1, "mat-cell", 36), e.BQk(), e.ynx(71, 45), e.YNc(72, li, 2, 0, "mat-header-cell", 35), e.YNc(73, ci, 3, 4, "mat-cell", 36), e.BQk(), e.ynx(74, 46), e.YNc(75, di, 2, 0, "mat-header-cell", 35), e.YNc(76, mi, 3, 1, "mat-cell", 36), e.BQk(), e.ynx(77, 47), e.YNc(78, pi, 2, 0, "mat-header-cell", 48), e.YNc(79, ui, 5, 6, "mat-cell", 49), e.BQk(), e.YNc(80, _i, 1, 0, "mat-header-row", 50), e.YNc(81, gi, 1, 2, "mat-row", 51), e.qZA(), e.YNc(82, hi, 2, 1, "div", 52), e.YNc(83, fi, 2, 2, "div", 53), e._UZ(84, "mat-paginator", 54, 55), e.qZA()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "My Tasks")("items", e.DdM(13, Zi))("active_item", "My Tasks"), e.xp6(30), e.Q6J("hidden", !t.selection.hasValue()), e.xp6(9), e.Q6J("dataSource", t.dataSource), e.xp6(38), e.Q6J("matHeaderRowDef", t.displayedColumns), e.xp6(1), e.Q6J("matRowDefColumns", t.displayedColumns), e.xp6(1), e.Q6J("ngIf", null == t.exampleDatabase ? null : t.exampleDatabase.isTblLoading), e.xp6(1), e.Q6J("ngIf", !(null != t.exampleDatabase && t.exampleDatabase.isTblLoading)), e.xp6(1), e.Q6J("length", t.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", e.DdM(14, vi)))
                },
                dependencies: [l.mk, l.O5, x.Hw, Z.RK, Z.nh, v.NW, g.YE, g.nU, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, le.oG, P.gM, F.Ou, q.L, fe.A, l.uU]
            });
            class Ti extends b.o2 {
                get filter() {
                    return this.filterChange.value
                }
                set filter(a) {
                    this.filterChange.next(a)
                }
                constructor(a, t, o) {
                    super(), this.exampleDatabase = a, this.paginator = t, this._sort = o, this.filterChange = new k.X(""), this.filteredData = [], this.renderedData = [], this.filterChange.subscribe(() => this.paginator.pageIndex = 0)
                }
                connect() {
                    const a = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
                    return this.exampleDatabase.getAllMyTaskss(), (0, de.T)(...a).pipe((0, me.U)(() => {
                        this.filteredData = this.exampleDatabase.data.slice().filter(n => -1 !== (n.taskNo + n.project + n.client + n.status + n.priority + n.type + n.executor + n.date + n.details).toLowerCase().indexOf(this.filter.toLowerCase()));
                        const t = this.sortData(this.filteredData.slice());
                        return this.renderedData = t.splice(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize), this.renderedData
                    }))
                }
                disconnect() {}
                sortData(a) {
                    return this._sort.active && "" !== this._sort.direction ? a.sort((t, o) => {
                        let n = "",
                            r = "";
                        switch (this._sort.active) {
                            case "id":
                                [n, r] = [t.id, o.id];
                                break;
                            case "taskNo":
                                [n, r] = [t.taskNo, o.taskNo];
                                break;
                            case "project":
                                [n, r] = [t.project, o.project];
                                break;
                            case "client":
                                [n, r] = [t.client, o.client];
                                break;
                            case "status":
                                [n, r] = [t.status, o.status];
                                break;
                            case "priority":
                                [n, r] = [t.priority, o.priority];
                                break;
                            case "type":
                                [n, r] = [t.type, o.type]
                        }
                        return ((isNaN(+n) ? n : +n) < (isNaN(+r) ? r : +r) ? -1 : 1) * ("asc" === this._sort.direction ? 1 : -1)
                    }) : a
                }
            }
            const bi = function() {
                return ["Home"]
            };
            class ee {
                constructor() {
                    this.hideRequiredControl = new m.p4(!1)
                }
            }
            ee.\u0275fac = function(a) {
                return new(a || ee)
            }, ee.\u0275cmp = e.Xpm({
                type: ee,
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
                template: function(a, t) {
                    1 & a && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9), e._UZ(10, "input", 10), e.qZA(), e.TgZ(11, "div", 11)(12, "ng-scrollbar", 12)(13, "div", 13)(14, "ul", 14)(15, "li", 15), e._UZ(16, "img", 16), e.TgZ(17, "div", 17)(18, "div", 18), e._uU(19, "William Smith"), e.qZA(), e.TgZ(20, "div", 19)(21, "i", 20), e._uU(22, "fiber_manual_record"), e.qZA(), e._uU(23, " left 7 mins ago "), e.qZA()()(), e.TgZ(24, "li", 21), e._UZ(25, "img", 22), e.TgZ(26, "div", 17)(27, "div", 18), e._uU(28, "Martha Williams"), e.qZA(), e.TgZ(29, "div", 19)(30, "i", 20), e._uU(31, "fiber_manual_record"), e.qZA(), e._uU(32, " online "), e.qZA()()(), e.TgZ(33, "li", 21), e._UZ(34, "img", 23), e.TgZ(35, "div", 17)(36, "div", 18), e._uU(37, "Joseph Clark"), e.qZA(), e.TgZ(38, "div", 19)(39, "i", 24), e._uU(40, "fiber_manual_record"), e.qZA(), e._uU(41, " online "), e.qZA()()(), e.TgZ(42, "li", 21), e._UZ(43, "img", 25), e.TgZ(44, "div", 17)(45, "div", 18), e._uU(46, "Nancy Taylor"), e.qZA(), e.TgZ(47, "div", 19)(48, "i", 24), e._uU(49, "fiber_manual_record"), e.qZA(), e._uU(50, " online "), e.qZA()()(), e.TgZ(51, "li", 21), e._UZ(52, "img", 26), e.TgZ(53, "div", 17)(54, "div", 18), e._uU(55, "Margaret Wilson"), e.qZA(), e.TgZ(56, "div", 19)(57, "i", 24), e._uU(58, "fiber_manual_record"), e.qZA(), e._uU(59, " online "), e.qZA()()(), e.TgZ(60, "li", 21), e._UZ(61, "img", 27), e.TgZ(62, "div", 17)(63, "div", 18), e._uU(64, "Joseph Jones"), e.qZA(), e.TgZ(65, "div", 19)(66, "i", 20), e._uU(67, "fiber_manual_record"), e.qZA(), e._uU(68, " left 30 mins ago "), e.qZA()()(), e.TgZ(69, "li", 21), e._UZ(70, "img", 28), e.TgZ(71, "div", 17)(72, "div", 18), e._uU(73, "Jane Brown"), e.qZA(), e.TgZ(74, "div", 19)(75, "i", 20), e._uU(76, "fiber_manual_record"), e.qZA(), e._uU(77, " left 10 hours ago "), e.qZA()()(), e.TgZ(78, "li", 21), e._UZ(79, "img", 29), e.TgZ(80, "div", 17)(81, "div", 18), e._uU(82, "Eliza Johnson"), e.qZA(), e.TgZ(83, "div", 19)(84, "i", 24), e._uU(85, "fiber_manual_record"), e.qZA(), e._uU(86, " online "), e.qZA()()(), e.TgZ(87, "li", 21), e._UZ(88, "img", 23), e.TgZ(89, "div", 17)(90, "div", 18), e._uU(91, "Mike Clark"), e.qZA(), e.TgZ(92, "div", 19)(93, "i", 24), e._uU(94, "fiber_manual_record"), e.qZA(), e._uU(95, " online "), e.qZA()()(), e.TgZ(96, "li", 21), e._UZ(97, "img", 25), e.TgZ(98, "div", 17)(99, "div", 18), e._uU(100, "Ann Henry"), e.qZA(), e.TgZ(101, "div", 19)(102, "i", 24), e._uU(103, "fiber_manual_record"), e.qZA(), e._uU(104, " online "), e.qZA()()(), e.TgZ(105, "li", 21), e._UZ(106, "img", 26), e.TgZ(107, "div", 17)(108, "div", 18), e._uU(109, "Nancy Smith"), e.qZA(), e.TgZ(110, "div", 19)(111, "i", 24), e._uU(112, "fiber_manual_record"), e.qZA(), e._uU(113, " online "), e.qZA()()(), e.TgZ(114, "li", 21), e._UZ(115, "img", 30), e.TgZ(116, "div", 17)(117, "div", 18), e._uU(118, "David Wilson"), e.qZA(), e.TgZ(119, "div", 19)(120, "i", 20), e._uU(121, "fiber_manual_record"), e.qZA(), e._uU(122, " offline since Oct 28 "), e.qZA()()()()()()()()()()(), e.TgZ(123, "div", 31)(124, "div", 6)(125, "div", 32)(126, "div", 33), e._UZ(127, "img", 22), e.TgZ(128, "div", 34)(129, "div", 35), e._uU(130, "Maria Smith"), e.qZA(), e.TgZ(131, "div", 36), e._uU(132, "2 new messages"), e.qZA()()(), e.TgZ(133, "ng-scrollbar", 37)(134, "div", 38)(135, "ul")(136, "li", 21)(137, "div", 39)(138, "span", 40), e._uU(139, "10:10 AM, Today "), e.qZA(), e._uU(140, " \xa0 \xa0 "), e.TgZ(141, "span", 41), e._uU(142, "Maria"), e.qZA()(), e.TgZ(143, "div", 42), e._uU(144, " Hi Robert , how are you? How is your work going on? "), e.qZA()(), e.TgZ(145, "li")(146, "div", 43)(147, "span", 41), e._uU(148, "Robert "), e.qZA(), e.TgZ(149, "span", 40), e._uU(150, "10:12 AM, Today"), e.qZA()(), e.TgZ(151, "div", 44)(152, "p"), e._uU(153, "Its good. We completed almost all task assign by our manager."), e.qZA(), e._UZ(154, "div", 4), e.qZA()(), e.TgZ(155, "li")(156, "div", 43)(157, "span", 41), e._uU(158, "Robert "), e.qZA(), e.TgZ(159, "span", 40), e._uU(160, "10:12 AM, Today"), e.qZA()(), e.TgZ(161, "div", 44)(162, "p"), e._uU(163, "How are you feel today? What's about vacation?."), e.qZA(), e._UZ(164, "div", 4), e.qZA()(), e.TgZ(165, "li", 21)(166, "div", 39)(167, "span", 40), e._uU(168, "10:10 AM, Today "), e.qZA(), e._uU(169, " \xa0 \xa0 "), e.TgZ(170, "span", 41), e._uU(171, "Maria"), e.qZA()(), e.TgZ(172, "div", 42), e._uU(173, " I am good, We think for next weekend. "), e.qZA()()()()(), e.TgZ(174, "div", 45)(175, "div", 46)(176, "div", 47)(177, "mat-form-field", 48), e._UZ(178, "input", 49), e.qZA()()(), e.TgZ(179, "div", 50)(180, "button", 51)(181, "i", 52), e._uU(182, "attach_file"), e.qZA()(), e.TgZ(183, "button", 53)(184, "i", 52), e._uU(185, "insert_emoticon"), e.qZA()()()()()()()()()()), 2 & a && (e.xp6(3), e.Q6J("title", "Chat")("items", e.DdM(4, bi))("active_item", "Chat"), e.xp6(174), e.Q6J("hideRequiredMarker", t.hideRequiredControl.value))
                },
                dependencies: [I.KC, Z.nh, _.KE, R.Nt, q.L]
            });
            const yi = [{
                path: "dashboard",
                component: E
            }, {
                path: "attendance",
                component: B
            }, {
                path: "myteam",
                component: H
            }, {
                path: "myprojects",
                component: W
            }, {
                path: "mytasks",
                component: V
            }, {
                path: "myleaves",
                component: $
            }, {
                path: "chat",
                component: ee
            }, {
                path: "settings",
                component: G
            }, {
                path: "**",
                component: Te.J
            }];
            class J {}
            J.\u0275fac = function(a) {
                return new(a || J)
            }, J.\u0275mod = e.oAB({
                type: J
            }), J.\u0275inj = e.cJS({
                imports: [_e.Bz.forChild(yi), _e.Bz]
            });
            var Ai = c(5626),
                xi = c(4844);
            class Y {}
            Y.\u0275fac = function(a) {
                return new(a || Y)
            }, Y.\u0275mod = e.oAB({
                type: Y
            }), Y.\u0275inj = e.cJS({
                providers: [C, y, U, A],
                imports: [l.ez, J, m.u5, re.vQ, m.UX, pe.Ns.forRoot({
                    echarts: () => c.e(7386).then(c.bind(c, 7386))
                }), I.kb, x.Ps, Z.ot, u.Is, se.X, v.TU, w.ZX, _.lN, g.JX, h.Nh, Q.QW, f.Tx, T.FA, d.p0, N.LD, le.p9, R.c, P.AV, ue.Cv, ve.Fk, S._t, F.Cq, Ai.K, xi.m]
            })
        },
        3162: (Ze, ne, c) => {
            c.d(ne, {
                Cv: () => w,
                pW: () => se
            });
            var l = c(4650),
                m = (c(6895), c(3238)),
                re = c(1281);
            const pe = new l.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),
                u = (0, m.pj)(class {
                    constructor(_) {
                        this._elementRef = _
                    }
                }, "primary");
            let se = (() => {
                class _ extends u {
                    constructor(h, f, Q, T, d) {
                        super(h), this._ngZone = f, this._changeDetectorRef = Q, this._animationMode = T, this._isNoopAnimation = !1, this._value = 0, this._bufferValue = 0, this.animationEnd = new l.vpe, this._mode = "determinate", this._transitionendHandler = N => {
                            0 === this.animationEnd.observers.length || !N.target || !N.target.classList.contains("mdc-linear-progress__primary-bar") || ("determinate" === this.mode || "buffer" === this.mode) && this._ngZone.run(() => this.animationEnd.next({
                                value: this.value
                            }))
                        }, this._isNoopAnimation = "NoopAnimations" === T, d && (d.color && (this.color = this.defaultColor = d.color), this.mode = d.mode || this.mode)
                    }
                    get value() {
                        return this._value
                    }
                    set value(h) {
                        this._value = v((0, re.su)(h)), this._changeDetectorRef.markForCheck()
                    }
                    get bufferValue() {
                        return this._bufferValue || 0
                    }
                    set bufferValue(h) {
                        this._bufferValue = v((0, re.su)(h)), this._changeDetectorRef.markForCheck()
                    }
                    get mode() {
                        return this._mode
                    }
                    set mode(h) {
                        this._mode = h, this._changeDetectorRef.markForCheck()
                    }
                    ngAfterViewInit() {
                        this._ngZone.runOutsideAngular(() => {
                            this._elementRef.nativeElement.addEventListener("transitionend", this._transitionendHandler)
                        })
                    }
                    ngOnDestroy() {
                        this._elementRef.nativeElement.removeEventListener("transitionend", this._transitionendHandler)
                    }
                    _getPrimaryBarTransform() {
                        return `scaleX(${this._isIndeterminate()?1:this.value/100})`
                    }
                    _getBufferBarFlexBasis() {
                        return `${"buffer"===this.mode?this.bufferValue:100}%`
                    }
                    _isIndeterminate() {
                        return "indeterminate" === this.mode || "query" === this.mode
                    }
                }
                return _.\u0275fac = function(h) {
                    return new(h || _)(l.Y36(l.SBq), l.Y36(l.R0b), l.Y36(l.sBO), l.Y36(l.QbO, 8), l.Y36(pe, 8))
                }, _.\u0275cmp = l.Xpm({
                    type: _,
                    selectors: [
                        ["mat-progress-bar"]
                    ],
                    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
                    hostVars: 8,
                    hostBindings: function(h, f) {
                        2 & h && (l.uIk("aria-valuenow", f._isIndeterminate() ? null : f.value)("mode", f.mode), l.ekj("_mat-animation-noopable", f._isNoopAnimation)("mdc-linear-progress--animation-ready", !f._isNoopAnimation)("mdc-linear-progress--indeterminate", f._isIndeterminate()))
                    },
                    inputs: {
                        color: "color",
                        value: "value",
                        bufferValue: "bufferValue",
                        mode: "mode"
                    },
                    outputs: {
                        animationEnd: "animationEnd"
                    },
                    exportAs: ["matProgressBar"],
                    features: [l.qOj],
                    decls: 7,
                    vars: 4,
                    consts: [
                        ["aria-hidden", "true", 1, "mdc-linear-progress__buffer"],
                        [1, "mdc-linear-progress__buffer-bar"],
                        [1, "mdc-linear-progress__buffer-dots"],
                        ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"],
                        [1, "mdc-linear-progress__bar-inner"],
                        ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]
                    ],
                    template: function(h, f) {
                        1 & h && (l.TgZ(0, "div", 0), l._UZ(1, "div", 1)(2, "div", 2), l.qZA(), l.TgZ(3, "div", 3), l._UZ(4, "span", 4), l.qZA(), l.TgZ(5, "div", 5), l._UZ(6, "span", 4), l.qZA()), 2 & h && (l.xp6(1), l.Udp("flex-basis", f._getBufferBarFlexBasis()), l.xp6(2), l.Udp("transform", f._getPrimaryBarTransform()))
                    },
                    styles: ["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],
                    encapsulation: 2,
                    changeDetection: 0
                }), _
            })();

            function v(_, g = 0, h = 100) {
                return Math.max(g, Math.min(h, _))
            }
            let w = (() => {
                class _ {}
                return _.\u0275fac = function(h) {
                    return new(h || _)
                }, _.\u0275mod = l.oAB({
                    type: _
                }), _.\u0275inj = l.cJS({
                    imports: [m.BQ]
                }), _
            })()
        }
    }
]);