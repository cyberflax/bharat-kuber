"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [8799], {
        8799: (O, U, a) => {
            a.r(U), a.d(U, {
                DashboardModule: () => q
            });
            var t = a(6895),
                h = a(4153),
                d = a(1991),
                Z = a(9132),
                e = a(4650),
                A = a(249),
                u = a(6205),
                g = a(7392),
                m = a(4859),
                p = a(8255),
                y = a(266),
                s = a(3162),
                n = a(1299),
                o = a(1676);
            const l = function() {
                    return ["Home"]
                },
                x = function() {
                    return ["/admin/dashboard/main"]
                },
                c = function() {
                    return ["/admin/accounts/invoice"]
                };
            class _ {
                constructor() {
                    this.doughnutChartOptions = {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        plugins: {
                            legend: {
                                display: !1
                            }
                        }
                    }, this.doughnutChartLabels = ["India", "USA", "Itely"], this.doughnutChartData = {
                        labels: this.doughnutChartLabels,
                        datasets: [{
                            data: [350, 450, 100],
                            backgroundColor: ["#60A3F6", "#7C59E7", "#DD6811"]
                        }]
                    }, this.doughnutChartType = "doughnut"
                }
                ngOnInit() {
                    this.smallChart1(), this.smallChart2(), this.smallChart3(), this.smallChart4(), this.chart1(), this.chart2(), this.chart4(), this.projectChart()
                }
                smallChart1() {
                    this.smallChart1Options = {
                        series: [{
                            name: "Appointments",
                            data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62]
                        }],
                        chart: {
                            height: 70,
                            type: "area",
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            },
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#6F42C1"],
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"]
                        },
                        legend: {
                            show: !1
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
                smallChart2() {
                    this.smallChart2Options = {
                        series: [{
                            name: "Operations",
                            data: [5, 6, 8, 5, 7, 5, 6, 4, 3, 4, 7, 4, 9, 6, 5, 6]
                        }],
                        chart: {
                            height: 70,
                            type: "area",
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            },
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#FD7E14"],
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"]
                        },
                        legend: {
                            show: !1
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
                smallChart3() {
                    this.smallChart3Options = {
                        series: [{
                            name: "New Patients",
                            data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62]
                        }],
                        chart: {
                            height: 70,
                            type: "area",
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            },
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#4CAF50"],
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"]
                        },
                        legend: {
                            show: !1
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
                smallChart4() {
                    this.smallChart4Options = {
                        series: [{
                            name: "Earning",
                            data: [150, 161, 180, 150, 172, 152, 160, 141, 130, 145, 170, 140, 193, 163, 150, 162]
                        }],
                        chart: {
                            height: 70,
                            type: "area",
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            },
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#2196F3"],
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"]
                        },
                        legend: {
                            show: !1
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
                        colors: ["#FC8380", "#6973C6"],
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            type: "datetime",
                            categories: ["2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24", "2018-09-25"]
                        },
                        legend: {
                            show: !0,
                            position: "top",
                            horizontalAlign: "center",
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
                    this.barChartOptions = {
                        series: [{
                            name: "New Errors",
                            data: [44, 55, 41, 67, 22, 43]
                        }, {
                            name: "Bugs",
                            data: [13, 23, 20, 8, 13, 27]
                        }, {
                            name: "Development",
                            data: [11, 17, 15, 15, 21, 14]
                        }, {
                            name: "Payment",
                            data: [21, 7, 25, 13, 22, 8]
                        }],
                        chart: {
                            type: "bar",
                            height: 350,
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
                        xaxis: {
                            type: "category",
                            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
                        },
                        legend: {
                            show: !1
                        },
                        fill: {
                            opacity: .8,
                            colors: ["#01B8AA", "#374649", "#FD625E", "#F2C80F"]
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
                projectChart() {
                    this.projectOptions = {
                        series: [{
                            name: "Project A",
                            type: "column",
                            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                        }, {
                            name: "Project B",
                            type: "area",
                            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                        }, {
                            name: "Project C",
                            type: "line",
                            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                        }],
                        chart: {
                            height: 400,
                            type: "line",
                            stacked: !1,
                            foreColor: "#9aa0ac"
                        },
                        colors: ["#7F7D7F", "#AC93E5", "#FEA861"],
                        stroke: {
                            width: [0, 2, 5],
                            curve: "smooth"
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: "50%"
                            }
                        },
                        fill: {
                            opacity: [.85, .25, 1],
                            gradient: {
                                inverseColors: !1,
                                shade: "light",
                                type: "vertical",
                                opacityFrom: .85,
                                opacityTo: .55,
                                stops: [0, 100, 100, 100]
                            }
                        },
                        labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
                        markers: {
                            size: 0
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
                        },
                        xaxis: {
                            type: "datetime"
                        },
                        yaxis: {
                            title: {
                                text: "Revenue"
                            },
                            min: 0
                        },
                        tooltip: {
                            theme: "dark",
                            shared: !0,
                            intersect: !1,
                            y: {
                                formatter: function(i) {
                                    return typeof i < "u" ? i.toFixed(0) + "k dollars" : i
                                }
                            }
                        }
                    }
                }
                chart4() {
                    this.performanceRateChartOptions = {
                        series: [{
                            name: "Bill Amount",
                            data: [113, 120, 130, 120, 125, 119, 126]
                        }],
                        chart: {
                            height: 380,
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
                        colors: ["#545454"],
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
                            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            title: {
                                text: "Weekday"
                            }
                        },
                        yaxis: {
                            title: {
                                text: "Bill Amount($)"
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
            _.\u0275fac = function(i) {
                return new(i || _)
            }, _.\u0275cmp = e.Xpm({
                type: _,
                selectors: [
                    ["app-main"]
                ],
                decls: 666,
                vars: 145,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-xl-8"],
                    [1, "card"],
                    [1, "header"],
                    ["mat-icon-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"],
                    ["menu", "matMenu"],
                    ["mat-menu-item", ""],
                    ["mat-menu-item", "", "disabled", ""],
                    [1, "body", "p-5"],
                    [3, "series", "chart", "yaxis", "xaxis", "labels", "stroke", "plotOptions", "markers", "grid", "fill", "tooltip", "colors"],
                    [1, "col-xl-4"],
                    [1, "col-lg-6"],
                    [1, "card", "card-statistic-2"],
                    [1, "clearfix"],
                    [1, "card-right"],
                    [1, "float-end"],
                    [1, "m-r-10", "m-l-10"],
                    [1, "font-weight-bold", "float-end", "mb-0"],
                    [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"],
                    [1, "card-bnner"],
                    ["src", "assets/images/pages/home-1.png", "alt", ""],
                    [3, "routerLink"],
                    [1, "fas", "fa-arrow-down"],
                    [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"],
                    [1, "body"],
                    [1, "col-md-12", "col-xl-4", "d-flex", "flex-column", "justify-content-center"],
                    [1, "m-l-10", "m-b-20"],
                    [1, "font-weight-light", "col-green"],
                    [1, "mb-2"],
                    [1, "m-l-10"],
                    [1, "font-weight-light", "col-orange"],
                    [1, "col-md-12", "col-xl-8"],
                    [1, "col-md-6"],
                    [1, "tx-primary", "m-b-30"],
                    [1, "mb-3", "mt-3"],
                    [1, "table", "table-borderless"],
                    [1, "tr-height-m"],
                    [1, "text-muted"],
                    [1, "w-100", "px-0"],
                    ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow"],
                    [1, "font-weight-bold", "mb-0"],
                    ["mode", "determinate", "value", "90", 1, "progress-m", "progress-round", "green-progress", "progress-shadow"],
                    ["mode", "determinate", "value", "65", 1, "progress-m", "progress-round", "sky-progress", "progress-shadow"],
                    ["mode", "determinate", "value", "50", 1, "progress-m", "progress-round", "orange-progress", "progress-shadow"],
                    ["mode", "determinate", "value", "58", 1, "progress-m", "progress-round", "red-progress", "progress-shadow"],
                    [1, "col-md-6", "mt-3"],
                    [1, "recent-report__chart"],
                    ["baseChart", "", "height", "150", 1, "chart", 3, "data", "type", "options"],
                    [1, "country-chart"],
                    [1, "d-flex", "justify-content-between", "mx-xl-5", "mt-3"],
                    [1, "chart-note"],
                    [1, "dot", "dot-product", "bg-green"],
                    [1, "mb-0"],
                    [1, "dot", "dot-product", "bg-orange"],
                    [1, "dot", "dot-product", "bg-purple"],
                    [1, "dot", "dot-product", "bg-red"],
                    [1, "row", "clearfix"],
                    [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"],
                    [1, "tableBody"],
                    [1, "responsive_table"],
                    [1, "table", "table-hover"],
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
                    [1, "card-body"],
                    [1, "float-start"],
                    [1, "text-muted", "font-12"],
                    [1, "mb-5"],
                    [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "tooltip", "title"],
                    [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"],
                    [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "grid", "tooltip", "dataLabels"],
                    [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "grid", "tooltip", "legend", "fill"],
                    [1, "table"],
                    [1, "text-truncate"],
                    [1, "list-unstyled", "order-list"],
                    [1, "avatar", "avatar-sm"],
                    ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"],
                    [1, "badge"],
                    [1, "badge", "col-blue"],
                    ["mode", "determinate", "value", "37", 1, "progress-xs", "progress-round", "sky-progress", "progress-shadow"],
                    [1, "far", "fa-file-pdf", "tbl-pdf"],
                    ["mat-icon-button", "", "matTooltip", "Edit", 1, "tbl-action-btn"],
                    [3, "icon"],
                    ["mat-icon-button", "", "matTooltip", "Delete", 1, "tbl-action-btn"],
                    ["src", "assets/images/user/user7.jpg", "alt", "user", 1, "rounded-circle"],
                    [1, "badge", "col-green"],
                    ["mode", "determinate", "value", "73", 1, "progress-xs", "progress-round", "green-progress", "progress-shadow"],
                    ["src", "assets/images/user/user8.jpg", "alt", "user", 1, "rounded-circle"],
                    ["mode", "determinate", "value", "52", 1, "progress-xs", "progress-round", "sky-progress", "progress-shadow"],
                    ["src", "assets/images/user/user5.jpg", "alt", "user", 1, "rounded-circle"],
                    ["src", "assets/images/user/user9.jpg", "alt", "user", 1, "rounded-circle"],
                    [1, "badge", "col-orange"],
                    ["mode", "determinate", "value", "40", 1, "progress-xs", "progress-round", "orange-progress", "progress-shadow"],
                    ["src", "assets/images/user/user4.jpg", "alt", "user", 1, "rounded-circle"],
                    ["mode", "determinate", "value", "88", 1, "progress-xs", "progress-round", "green-progress", "progress-shadow"],
                    ["src", "assets/images/user/user6.jpg", "alt", "user", 1, "rounded-circle"],
                    ["mode", "determinate", "value", "67", 1, "progress-xs", "progress-round", "oragne-progress", "progress-shadow", "text-left"]
                ],
                template: function(i, r) {
                    if (1 & i && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2"), e._uU(9, "Project Survay"), e.qZA(), e.TgZ(10, "button", 8)(11, "mat-icon"), e._uU(12, "more_vert"), e.qZA()(), e.TgZ(13, "mat-menu", null, 9)(15, "button", 10)(16, "mat-icon"), e._uU(17, "add_circle_outline"), e.qZA(), e.TgZ(18, "span"), e._uU(19, "Add"), e.qZA()(), e.TgZ(20, "button", 11)(21, "mat-icon"), e._uU(22, "delete_outline"), e.qZA(), e.TgZ(23, "span"), e._uU(24, "Delete"), e.qZA()(), e.TgZ(25, "button", 10)(26, "mat-icon"), e._uU(27, "refresh"), e.qZA(), e.TgZ(28, "span"), e._uU(29, "Refresh"), e.qZA()()()(), e.TgZ(30, "div", 12), e._UZ(31, "apx-chart", 13), e.qZA()()(), e.TgZ(32, "div", 14)(33, "div", 4)(34, "div", 15)(35, "div", 16)(36, "div", 17)(37, "div", 18)(38, "div")(39, "h5", 19), e._uU(40, "Earning"), e.qZA()(), e.TgZ(41, "div", 20)(42, "h3", 21), e._uU(43, " $20,125"), e.qZA()()()(), e._UZ(44, "apx-chart", 22), e.qZA()(), e.TgZ(45, "div", 15)(46, "div", 16)(47, "div", 17)(48, "div", 18)(49, "div")(50, "h5", 19), e._uU(51, "New Clients"), e.qZA()(), e.TgZ(52, "div", 20)(53, "h3", 21), e._uU(54, " 129"), e.qZA()()()(), e._UZ(55, "apx-chart", 22), e.qZA()(), e.TgZ(56, "div", 15)(57, "div", 16)(58, "div", 17)(59, "div", 18)(60, "div")(61, "h5", 19), e._uU(62, "Projects"), e.qZA()(), e.TgZ(63, "div", 20)(64, "h3", 21), e._uU(65, "154"), e.qZA()()()(), e._UZ(66, "apx-chart", 22), e.qZA()(), e.TgZ(67, "div", 15)(68, "div", 16)(69, "div", 17)(70, "div", 18)(71, "div")(72, "h5", 19), e._uU(73, "Employees"), e.qZA()(), e.TgZ(74, "div", 20)(75, "h3", 21), e._uU(76, "650"), e.qZA()()()(), e._UZ(77, "apx-chart", 22), e.qZA()()(), e.TgZ(78, "div", 23)(79, "div", 4)(80, "div", 15), e._UZ(81, "img", 24), e.qZA(), e.TgZ(82, "div", 15)(83, "h4"), e._uU(84, "Download Reports"), e.qZA(), e.TgZ(85, "p"), e._uU(86, "Download employee salary reports."), e.qZA(), e.TgZ(87, "a", 25), e._uU(88, "Download "), e._UZ(89, "i", 26), e.qZA()()()()()(), e.TgZ(90, "div", 4)(91, "div", 27)(92, "div", 6)(93, "div", 7)(94, "h2"), e._uU(95, "Product Report"), e.qZA(), e.TgZ(96, "button", 8)(97, "mat-icon"), e._uU(98, "more_vert"), e.qZA()(), e.TgZ(99, "mat-menu", null, 9)(101, "button", 10)(102, "mat-icon"), e._uU(103, "add_circle_outline"), e.qZA(), e.TgZ(104, "span"), e._uU(105, "Add"), e.qZA()(), e.TgZ(106, "button", 11)(107, "mat-icon"), e._uU(108, "delete_outline"), e.qZA(), e.TgZ(109, "span"), e._uU(110, "Delete"), e.qZA()(), e.TgZ(111, "button", 10)(112, "mat-icon"), e._uU(113, "refresh"), e.qZA(), e.TgZ(114, "span"), e._uU(115, "Refresh"), e.qZA()()()(), e.TgZ(116, "div", 28)(117, "div", 4)(118, "div", 29)(119, "div", 30)(120, "h1"), e._uU(121, "$1,17,289"), e.qZA(), e.TgZ(122, "h4", 31), e._uU(123, "Total Income"), e.qZA(), e.TgZ(124, "p", 32), e._uU(125, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "), e.qZA()(), e.TgZ(126, "div", 33)(127, "h1"), e._uU(128, "$65,984"), e.qZA(), e.TgZ(129, "h4", 34), e._uU(130, "Total Expense"), e.qZA(), e.TgZ(131, "p", 32), e._uU(132, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. "), e.qZA()()(), e.TgZ(133, "div", 35)(134, "div", 4)(135, "div", 36)(136, "h5", 37), e._uU(137, "Country Wise Sales"), e.qZA(), e.TgZ(138, "div", 38)(139, "table", 39)(140, "tbody")(141, "tr", 40)(142, "td", 41), e._uU(143, "India"), e.qZA(), e.TgZ(144, "td", 42), e._UZ(145, "mat-progress-bar", 43), e.qZA(), e.TgZ(146, "td")(147, "h5", 44), e._uU(148, "154"), e.qZA()()(), e.TgZ(149, "tr", 40)(150, "td", 41), e._uU(151, "USA"), e.qZA(), e.TgZ(152, "td", 42), e._UZ(153, "mat-progress-bar", 45), e.qZA(), e.TgZ(154, "td")(155, "h5", 44), e._uU(156, "423"), e.qZA()()(), e.TgZ(157, "tr", 40)(158, "td", 41), e._uU(159, "Shrilanka"), e.qZA(), e.TgZ(160, "td", 42), e._UZ(161, "mat-progress-bar", 46), e.qZA(), e.TgZ(162, "td")(163, "h5", 44), e._uU(164, "265"), e.qZA()()(), e.TgZ(165, "tr", 40)(166, "td", 41), e._uU(167, "Australia"), e.qZA(), e.TgZ(168, "td", 42), e._UZ(169, "mat-progress-bar", 47), e.qZA(), e.TgZ(170, "td")(171, "h5", 44), e._uU(172, "341"), e.qZA()()(), e.TgZ(173, "tr", 40)(174, "td", 41), e._uU(175, "Japan"), e.qZA(), e.TgZ(176, "td", 42), e._UZ(177, "mat-progress-bar", 48), e.qZA(), e.TgZ(178, "td")(179, "h5", 44), e._uU(180, "238"), e.qZA()()(), e.TgZ(181, "tr", 40)(182, "td", 41), e._uU(183, "Itely"), e.qZA(), e.TgZ(184, "td", 42), e._UZ(185, "mat-progress-bar", 43), e.qZA(), e.TgZ(186, "td")(187, "h5", 44), e._uU(188, "153"), e.qZA()()()()()()(), e.TgZ(189, "div", 49)(190, "div", 50), e._UZ(191, "canvas", 51), e.qZA(), e.TgZ(192, "div", 52)(193, "div", 53)(194, "div", 54), e._UZ(195, "span", 55), e.TgZ(196, "span"), e._uU(197, "Itely"), e.qZA()(), e.TgZ(198, "p", 56), e._uU(199, "$30,289"), e.qZA()(), e.TgZ(200, "div", 53)(201, "div", 54), e._UZ(202, "span", 57), e.TgZ(203, "span"), e._uU(204, "USA"), e.qZA()(), e.TgZ(205, "p", 56), e._uU(206, "$25,968"), e.qZA()(), e.TgZ(207, "div", 53)(208, "div", 54), e._UZ(209, "span", 58), e.TgZ(210, "span"), e._uU(211, "India"), e.qZA()(), e.TgZ(212, "p", 56), e._uU(213, "$45,278"), e.qZA()(), e.TgZ(214, "div", 53)(215, "div", 54), e._UZ(216, "span", 59), e.TgZ(217, "span"), e._uU(218, "Shrilanka"), e.qZA()(), e.TgZ(219, "p", 56), e._uU(220, "$21,376"), e.qZA()()()()()()()()()()(), e.TgZ(221, "div", 60)(222, "div", 61)(223, "div", 6)(224, "div", 7)(225, "h2"), e._uU(226, "Invoices"), e.qZA(), e.TgZ(227, "button", 8)(228, "mat-icon"), e._uU(229, "more_vert"), e.qZA()(), e.TgZ(230, "mat-menu", null, 9)(232, "button", 10)(233, "mat-icon"), e._uU(234, "add_circle_outline"), e.qZA(), e.TgZ(235, "span"), e._uU(236, "Add"), e.qZA()(), e.TgZ(237, "button", 11)(238, "mat-icon"), e._uU(239, "delete_outline"), e.qZA(), e.TgZ(240, "span"), e._uU(241, "Delete"), e.qZA()(), e.TgZ(242, "button", 10)(243, "mat-icon"), e._uU(244, "refresh"), e.qZA(), e.TgZ(245, "span"), e._uU(246, "Refresh"), e.qZA()()()(), e.TgZ(247, "div", 62)(248, "div", 63)(249, "table", 64)(250, "thead")(251, "tr")(252, "th"), e._uU(253, "Invoice No"), e.qZA(), e.TgZ(254, "th"), e._uU(255, "Client Name"), e.qZA(), e.TgZ(256, "th"), e._uU(257, "Due Date"), e.qZA(), e.TgZ(258, "th"), e._uU(259, "Status"), e.qZA(), e.TgZ(260, "th"), e._uU(261, "Total "), e.qZA()()(), e.TgZ(262, "tbody")(263, "tr")(264, "td")(265, "a", 25), e._uU(266, " #IN7865 "), e.qZA()(), e.TgZ(267, "td"), e._UZ(268, "img", 65), e._uU(269, "John Doe"), e.qZA(), e.TgZ(270, "td"), e._uU(271, "12/05/2016 "), e.qZA(), e.TgZ(272, "td")(273, "div", 66), e._uU(274, "Paid"), e.qZA()(), e.TgZ(275, "td"), e._uU(276, " $500 "), e.qZA()(), e.TgZ(277, "tr")(278, "td")(279, "a", 25), e._uU(280, " #IN2301 "), e.qZA()(), e.TgZ(281, "td"), e._UZ(282, "img", 67), e._uU(283, "Sarah Smith"), e.qZA(), e.TgZ(284, "td"), e._uU(285, "31/03/2016 "), e.qZA(), e.TgZ(286, "td")(287, "div", 68), e._uU(288, "Unpaid"), e.qZA()(), e.TgZ(289, "td"), e._uU(290, " $372 "), e.qZA()(), e.TgZ(291, "tr")(292, "td")(293, "a", 25), e._uU(294, " #IN7239 "), e.qZA()(), e.TgZ(295, "td"), e._UZ(296, "img", 69), e._uU(297, "Airi Satou"), e.qZA(), e.TgZ(298, "td"), e._uU(299, "14/04/2017 "), e.qZA(), e.TgZ(300, "td")(301, "div", 70), e._uU(302, "Partially Paid"), e.qZA()(), e.TgZ(303, "td"), e._uU(304, " $1038 "), e.qZA()(), e.TgZ(305, "tr")(306, "td")(307, "a", 25), e._uU(308, " #IN1482 "), e.qZA()(), e.TgZ(309, "td"), e._UZ(310, "img", 71), e._uU(311, "Angelica Ramos"), e.qZA(), e.TgZ(312, "td"), e._uU(313, "11/08/2017 "), e.qZA(), e.TgZ(314, "td")(315, "div", 66), e._uU(316, "Paid"), e.qZA()(), e.TgZ(317, "td"), e._uU(318, " $872 "), e.qZA()(), e.TgZ(319, "tr")(320, "td")(321, "a", 25), e._uU(322, " #IN8526 "), e.qZA()(), e.TgZ(323, "td"), e._UZ(324, "img", 72), e._uU(325, "Ashton Cox"), e.qZA(), e.TgZ(326, "td"), e._uU(327, "15/02/2018 "), e.qZA(), e.TgZ(328, "td")(329, "div", 68), e._uU(330, "Unpaid"), e.qZA()(), e.TgZ(331, "td"), e._uU(332, " $2398 "), e.qZA()(), e.TgZ(333, "tr")(334, "td")(335, "a", 25), e._uU(336, " #IN2473 "), e.qZA()(), e.TgZ(337, "td"), e._UZ(338, "img", 73), e._uU(339, "Cara Stevens"), e.qZA(), e.TgZ(340, "td"), e._uU(341, "28/01/2017 "), e.qZA(), e.TgZ(342, "td")(343, "div", 66), e._uU(344, "Paid"), e.qZA()(), e.TgZ(345, "td"), e._uU(346, " $834 "), e.qZA()(), e.TgZ(347, "tr")(348, "td")(349, "a", 25), e._uU(350, " #IN7366 "), e.qZA()(), e.TgZ(351, "td"), e._UZ(352, "img", 74), e._uU(353, "Jacob Ryan"), e.qZA(), e.TgZ(354, "td"), e._uU(355, "11/03/2017 "), e.qZA(), e.TgZ(356, "td")(357, "div", 70), e._uU(358, "Partially Paid"), e.qZA()(), e.TgZ(359, "td"), e._uU(360, " $147 "), e.qZA()()()()()()()(), e.TgZ(361, "div", 75)(362, "div", 6)(363, "div", 76)(364, "div", 77)(365, "h6"), e._uU(366, "Average Daily Bill"), e.qZA(), e.TgZ(367, "h5"), e._uU(368, "129 Dollar "), e.TgZ(369, "span", 78), e._uU(370, "(Average)"), e.qZA()()(), e.TgZ(371, "div", 79), e._UZ(372, "apx-chart", 80), e.qZA()()()()(), e.TgZ(373, "div", 4)(374, "div", 81)(375, "div", 6)(376, "div", 7)(377, "h2"), e._uU(378, "Client Survay"), e.qZA(), e.TgZ(379, "button", 8)(380, "mat-icon"), e._uU(381, "more_vert"), e.qZA()(), e.TgZ(382, "mat-menu", null, 9)(384, "button", 10)(385, "mat-icon"), e._uU(386, "add_circle_outline"), e.qZA(), e.TgZ(387, "span"), e._uU(388, "Add"), e.qZA()(), e.TgZ(389, "button", 11)(390, "mat-icon"), e._uU(391, "delete_outline"), e.qZA(), e.TgZ(392, "span"), e._uU(393, "Delete"), e.qZA()(), e.TgZ(394, "button", 10)(395, "mat-icon"), e._uU(396, "refresh"), e.qZA(), e.TgZ(397, "span"), e._uU(398, "Refresh"), e.qZA()()()(), e.TgZ(399, "div", 28), e._UZ(400, "apx-chart", 82), e.qZA()()(), e.TgZ(401, "div", 81)(402, "div", 6)(403, "div", 7)(404, "h2"), e._uU(405, "Support Tickets Survay"), e.qZA(), e.TgZ(406, "button", 8)(407, "mat-icon"), e._uU(408, "more_vert"), e.qZA()(), e.TgZ(409, "mat-menu", null, 9)(411, "button", 10)(412, "mat-icon"), e._uU(413, "add_circle_outline"), e.qZA(), e.TgZ(414, "span"), e._uU(415, "Add"), e.qZA()(), e.TgZ(416, "button", 11)(417, "mat-icon"), e._uU(418, "delete_outline"), e.qZA(), e.TgZ(419, "span"), e._uU(420, "Delete"), e.qZA()(), e.TgZ(421, "button", 10)(422, "mat-icon"), e._uU(423, "refresh"), e.qZA(), e.TgZ(424, "span"), e._uU(425, "Refresh"), e.qZA()()()(), e.TgZ(426, "div", 28), e._UZ(427, "apx-chart", 83), e.qZA()()()(), e.TgZ(428, "div", 60)(429, "div", 27)(430, "div", 6)(431, "div", 7)(432, "h2"), e._uU(433, "Projects"), e.qZA(), e.TgZ(434, "button", 8)(435, "mat-icon"), e._uU(436, "more_vert"), e.qZA()(), e.TgZ(437, "mat-menu", null, 9)(439, "button", 10)(440, "mat-icon"), e._uU(441, "add_circle_outline"), e.qZA(), e.TgZ(442, "span"), e._uU(443, "Add"), e.qZA()(), e.TgZ(444, "button", 11)(445, "mat-icon"), e._uU(446, "delete_outline"), e.qZA(), e.TgZ(447, "span"), e._uU(448, "Delete"), e.qZA()(), e.TgZ(449, "button", 10)(450, "mat-icon"), e._uU(451, "refresh"), e.qZA(), e.TgZ(452, "span"), e._uU(453, "Refresh"), e.qZA()()()(), e.TgZ(454, "div", 62)(455, "div", 63)(456, "table", 84)(457, "thead")(458, "tr")(459, "th"), e._uU(460, "Project Name"), e.qZA(), e.TgZ(461, "th"), e._uU(462, "Employees Team"), e.qZA(), e.TgZ(463, "th"), e._uU(464, "Team Leader"), e.qZA(), e.TgZ(465, "th"), e._uU(466, "Priority"), e.qZA(), e.TgZ(467, "th"), e._uU(468, "Open Task"), e.qZA(), e.TgZ(469, "th"), e._uU(470, "Completed Task"), e.qZA(), e.TgZ(471, "th"), e._uU(472, "Status"), e.qZA(), e.TgZ(473, "th"), e._uU(474, "Documents"), e.qZA(), e.TgZ(475, "th"), e._uU(476, "Actions"), e.qZA()()(), e.TgZ(477, "tbody")(478, "tr")(479, "td"), e._uU(480, "Project A"), e.qZA(), e.TgZ(481, "td", 85)(482, "ul", 86)(483, "li", 87), e._UZ(484, "img", 88), e.qZA(), e.TgZ(485, "li", 87), e._UZ(486, "img", 89), e.qZA(), e.TgZ(487, "li", 87), e._UZ(488, "img", 90), e.qZA(), e.TgZ(489, "li", 87)(490, "span", 91), e._uU(491, "+4"), e.qZA()()()(), e.TgZ(492, "td"), e._uU(493, "John Doe"), e.qZA(), e.TgZ(494, "td")(495, "div", 92), e._uU(496, "Medium"), e.qZA()(), e.TgZ(497, "td"), e._uU(498, "19"), e.qZA(), e.TgZ(499, "td"), e._uU(500, "10"), e.qZA(), e.TgZ(501, "td"), e._UZ(502, "mat-progress-bar", 93), e.qZA(), e.TgZ(503, "td"), e._UZ(504, "i", 94), e.qZA(), e.TgZ(505, "td")(506, "button", 95), e._UZ(507, "app-feather-icons", 96), e.qZA(), e.TgZ(508, "button", 97), e._UZ(509, "app-feather-icons", 96), e.qZA()()(), e.TgZ(510, "tr")(511, "td"), e._uU(512, "Project B"), e.qZA(), e.TgZ(513, "td", 85)(514, "ul", 86)(515, "li", 87), e._UZ(516, "img", 98), e.qZA(), e.TgZ(517, "li", 87), e._UZ(518, "img", 89), e.qZA(), e.TgZ(519, "li", 87)(520, "span", 91), e._uU(521, "+3"), e.qZA()()()(), e.TgZ(522, "td"), e._uU(523, "Sarah Smith"), e.qZA(), e.TgZ(524, "td")(525, "div", 99), e._uU(526, "Low"), e.qZA()(), e.TgZ(527, "td"), e._uU(528, "25"), e.qZA(), e.TgZ(529, "td"), e._uU(530, "18"), e.qZA(), e.TgZ(531, "td"), e._UZ(532, "mat-progress-bar", 100), e.qZA(), e.TgZ(533, "td"), e._UZ(534, "i", 94), e.qZA(), e.TgZ(535, "td")(536, "button", 95), e._UZ(537, "app-feather-icons", 96), e.qZA(), e.TgZ(538, "button", 97), e._UZ(539, "app-feather-icons", 96), e.qZA()()(), e.TgZ(540, "tr")(541, "td"), e._uU(542, "Project C"), e.qZA(), e.TgZ(543, "td", 85)(544, "ul", 86)(545, "li", 87), e._UZ(546, "img", 89), e.qZA(), e.TgZ(547, "li", 87), e._UZ(548, "img", 88), e.qZA(), e.TgZ(549, "li", 87), e._UZ(550, "img", 101), e.qZA(), e.TgZ(551, "li", 87)(552, "span", 91), e._uU(553, "+2"), e.qZA()()()(), e.TgZ(554, "td"), e._uU(555, "Airi Satou"), e.qZA(), e.TgZ(556, "td")(557, "div", 92), e._uU(558, "Medium"), e.qZA()(), e.TgZ(559, "td"), e._uU(560, "33"), e.qZA(), e.TgZ(561, "td"), e._uU(562, "21"), e.qZA(), e.TgZ(563, "td"), e._UZ(564, "mat-progress-bar", 102), e.qZA(), e.TgZ(565, "td"), e._UZ(566, "i", 94), e.qZA(), e.TgZ(567, "td")(568, "button", 95), e._UZ(569, "app-feather-icons", 96), e.qZA(), e.TgZ(570, "button", 97), e._UZ(571, "app-feather-icons", 96), e.qZA()()(), e.TgZ(572, "tr")(573, "td"), e._uU(574, "Project D"), e.qZA(), e.TgZ(575, "td", 85)(576, "ul", 86)(577, "li", 87), e._UZ(578, "img", 103), e.qZA(), e.TgZ(579, "li", 87), e._UZ(580, "img", 90), e.qZA(), e.TgZ(581, "li", 87), e._UZ(582, "img", 104), e.qZA(), e.TgZ(583, "li", 87)(584, "span", 91), e._uU(585, "+4"), e.qZA()()()(), e.TgZ(586, "td"), e._uU(587, "Angelica Ramos"), e.qZA(), e.TgZ(588, "td")(589, "div", 105), e._uU(590, "High"), e.qZA()(), e.TgZ(591, "td"), e._uU(592, "26"), e.qZA(), e.TgZ(593, "td"), e._uU(594, "15"), e.qZA(), e.TgZ(595, "td"), e._UZ(596, "mat-progress-bar", 106), e.qZA(), e.TgZ(597, "td"), e._UZ(598, "i", 94), e.qZA(), e.TgZ(599, "td")(600, "button", 95), e._UZ(601, "app-feather-icons", 96), e.qZA(), e.TgZ(602, "button", 97), e._UZ(603, "app-feather-icons", 96), e.qZA()()(), e.TgZ(604, "tr")(605, "td"), e._uU(606, "Project E"), e.qZA(), e.TgZ(607, "td", 85)(608, "ul", 86)(609, "li", 87), e._UZ(610, "img", 89), e.qZA(), e.TgZ(611, "li", 87), e._UZ(612, "img", 107), e.qZA(), e.TgZ(613, "li", 87)(614, "span", 91), e._uU(615, "+3"), e.qZA()()()(), e.TgZ(616, "td"), e._uU(617, "Ashton Cox"), e.qZA(), e.TgZ(618, "td")(619, "div", 99), e._uU(620, "Low"), e.qZA()(), e.TgZ(621, "td"), e._uU(622, "12"), e.qZA(), e.TgZ(623, "td"), e._uU(624, "11"), e.qZA(), e.TgZ(625, "td"), e._UZ(626, "mat-progress-bar", 108), e.qZA(), e.TgZ(627, "td"), e._UZ(628, "i", 94), e.qZA(), e.TgZ(629, "td")(630, "button", 95), e._UZ(631, "app-feather-icons", 96), e.qZA(), e.TgZ(632, "button", 97), e._UZ(633, "app-feather-icons", 96), e.qZA()()(), e.TgZ(634, "tr")(635, "td"), e._uU(636, "Project F"), e.qZA(), e.TgZ(637, "td", 85)(638, "ul", 86)(639, "li", 87), e._UZ(640, "img", 109), e.qZA(), e.TgZ(641, "li", 87), e._UZ(642, "img", 104), e.qZA(), e.TgZ(643, "li", 87), e._UZ(644, "img", 107), e.qZA(), e.TgZ(645, "li", 87)(646, "span", 91), e._uU(647, "+2"), e.qZA()()()(), e.TgZ(648, "td"), e._uU(649, "Cara Stevens"), e.qZA(), e.TgZ(650, "td")(651, "div", 105), e._uU(652, "High"), e.qZA()(), e.TgZ(653, "td"), e._uU(654, "43"), e.qZA(), e.TgZ(655, "td"), e._uU(656, "22"), e.qZA(), e.TgZ(657, "td"), e._UZ(658, "mat-progress-bar", 110), e.qZA(), e.TgZ(659, "td"), e._UZ(660, "i", 94), e.qZA(), e.TgZ(661, "td")(662, "button", 95), e._UZ(663, "app-feather-icons", 96), e.qZA(), e.TgZ(664, "button", 97), e._UZ(665, "app-feather-icons", 96), e.qZA()()()()()()()()()()()()), 2 & i) {
                        const T = e.MAs(14);
                        e.xp6(3), e.Q6J("title", "Dashboad")("items", e.DdM(136, l))("active_item", "Dashboad"), e.xp6(7), e.Q6J("matMenuTriggerFor", T), e.xp6(21), e.Q6J("series", r.projectOptions.series)("chart", r.projectOptions.chart)("yaxis", r.projectOptions.yaxis)("xaxis", r.projectOptions.xaxis)("labels", r.projectOptions.labels)("stroke", r.projectOptions.stroke)("plotOptions", r.projectOptions.plotOptions)("markers", r.projectOptions.markers)("grid", r.projectOptions.grid)("fill", r.projectOptions.fill)("tooltip", r.projectOptions.tooltip)("colors", r.projectOptions.colors), e.xp6(13), e.Q6J("series", r.smallChart1Options.series)("chart", r.smallChart1Options.chart)("xaxis", r.smallChart1Options.xaxis)("yaxis", r.smallChart1Options.yaxis)("colors", r.smallChart1Options.colors)("stroke", r.smallChart1Options.stroke)("legend", r.smallChart1Options.legend)("tooltip", r.smallChart1Options.tooltip)("dataLabels", r.smallChart1Options.dataLabels), e.xp6(11), e.Q6J("series", r.smallChart2Options.series)("chart", r.smallChart2Options.chart)("xaxis", r.smallChart2Options.xaxis)("yaxis", r.smallChart2Options.yaxis)("colors", r.smallChart2Options.colors)("stroke", r.smallChart2Options.stroke)("legend", r.smallChart2Options.legend)("tooltip", r.smallChart2Options.tooltip)("dataLabels", r.smallChart2Options.dataLabels), e.xp6(11), e.Q6J("series", r.smallChart3Options.series)("chart", r.smallChart3Options.chart)("xaxis", r.smallChart3Options.xaxis)("yaxis", r.smallChart3Options.yaxis)("colors", r.smallChart3Options.colors)("stroke", r.smallChart3Options.stroke)("legend", r.smallChart3Options.legend)("tooltip", r.smallChart3Options.tooltip)("dataLabels", r.smallChart3Options.dataLabels), e.xp6(11), e.Q6J("series", r.smallChart4Options.series)("chart", r.smallChart4Options.chart)("xaxis", r.smallChart4Options.xaxis)("yaxis", r.smallChart4Options.yaxis)("colors", r.smallChart4Options.colors)("stroke", r.smallChart4Options.stroke)("legend", r.smallChart4Options.legend)("tooltip", r.smallChart4Options.tooltip)("dataLabels", r.smallChart4Options.dataLabels), e.xp6(10), e.Q6J("routerLink", e.DdM(137, x)), e.xp6(9), e.Q6J("matMenuTriggerFor", T), e.xp6(95), e.Q6J("data", r.doughnutChartData)("type", r.doughnutChartType)("options", r.doughnutChartOptions), e.xp6(36), e.Q6J("matMenuTriggerFor", T), e.xp6(38), e.Q6J("routerLink", e.DdM(138, c)), e.xp6(14), e.Q6J("routerLink", e.DdM(139, c)), e.xp6(14), e.Q6J("routerLink", e.DdM(140, c)), e.xp6(14), e.Q6J("routerLink", e.DdM(141, c)), e.xp6(14), e.Q6J("routerLink", e.DdM(142, c)), e.xp6(14), e.Q6J("routerLink", e.DdM(143, c)), e.xp6(14), e.Q6J("routerLink", e.DdM(144, c)), e.xp6(23), e.Q6J("series", r.performanceRateChartOptions.series)("chart", r.performanceRateChartOptions.chart)("xaxis", r.performanceRateChartOptions.xaxis)("stroke", r.performanceRateChartOptions.stroke)("colors", r.performanceRateChartOptions.colors)("dataLabels", r.performanceRateChartOptions.dataLabels)("legend", r.performanceRateChartOptions.legend)("markers", r.performanceRateChartOptions.markers)("grid", r.performanceRateChartOptions.grid)("yaxis", r.performanceRateChartOptions.yaxis)("tooltip", r.performanceRateChartOptions.tooltip)("title", r.performanceRateChartOptions.title), e.xp6(7), e.Q6J("matMenuTriggerFor", T), e.xp6(21), e.Q6J("series", r.areaChartOptions.series)("chart", r.areaChartOptions.chart)("xaxis", r.areaChartOptions.xaxis)("yaxis", r.areaChartOptions.yaxis)("colors", r.areaChartOptions.colors)("stroke", r.areaChartOptions.stroke)("legend", r.areaChartOptions.legend)("grid", r.areaChartOptions.grid)("tooltip", r.areaChartOptions.tooltip)("dataLabels", r.areaChartOptions.dataLabels), e.xp6(6), e.Q6J("matMenuTriggerFor", T), e.xp6(21), e.Q6J("series", r.barChartOptions.series)("chart", r.barChartOptions.chart)("dataLabels", r.barChartOptions.dataLabels)("plotOptions", r.barChartOptions.plotOptions)("responsive", r.barChartOptions.responsive)("xaxis", r.barChartOptions.xaxis)("grid", r.barChartOptions.grid)("tooltip", r.barChartOptions.tooltip)("legend", r.barChartOptions.legend)("fill", r.barChartOptions.fill), e.xp6(7), e.Q6J("matMenuTriggerFor", T), e.xp6(73), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"), e.xp6(28), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"), e.xp6(30), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"), e.xp6(30), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"), e.xp6(28), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2"), e.xp6(30), e.Tol("tbl-fav-edit"), e.Q6J("icon", "edit"), e.xp6(2), e.Tol("tbl-fav-delete"), e.Q6J("icon", "trash-2")
                    }
                },
                dependencies: [Z.rH, A.jh, u.x, g.Hw, m.RK, p.VK, p.OP, p.p6, y.gM, s.pW, n.L, o.A]
            });
            const C = function() {
                return ["Home"]
            };
            class f {
                constructor() {}
                ngOnInit() {
                    this.chart1(), this.chart2()
                }
                chart1() {
                    this.lineChartOptions = {
                        series: [{
                            name: "Employee 1",
                            data: [70, 200, 80, 180, 170, 105, 210]
                        }, {
                            name: "Employee 2",
                            data: [80, 250, 30, 120, 260, 100, 180]
                        }, {
                            name: "Employee 3",
                            data: [85, 130, 85, 225, 80, 190, 120]
                        }],
                        chart: {
                            height: 350,
                            type: "line",
                            foreColor: "#9aa0ac",
                            dropShadow: {
                                enabled: !0,
                                color: "#000",
                                top: 18,
                                left: 7,
                                blur: 10,
                                opacity: .2
                            },
                            toolbar: {
                                show: !1
                            }
                        },
                        colors: ["#A5A5A5", "#875692", "#4CB5AC"],
                        stroke: {
                            curve: "smooth"
                        },
                        grid: {
                            show: !0,
                            borderColor: "#9aa0ac",
                            strokeDashArray: 1
                        },
                        markers: {
                            size: 3
                        },
                        xaxis: {
                            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                            title: {
                                text: "Month"
                            }
                        },
                        yaxis: {
                            title: {
                                text: "Clients"
                            }
                        },
                        legend: {
                            position: "top",
                            horizontalAlign: "right",
                            floating: !0,
                            offsetY: -25,
                            offsetX: -5
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
                    this.pieChartOptions = {
                        series2: [44, 55, 13, 43, 22],
                        chart: {
                            type: "donut",
                            width: 225
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        labels: ["Science", "Mathes", "Economics", "History", "Music"],
                        responsive: [{
                            breakpoint: 480,
                            options: {}
                        }]
                    }
                }
            }
            f.\u0275fac = function(i) {
                return new(i || f)
            }, f.\u0275cmp = e.Xpm({
                type: f,
                selectors: [
                    ["app-dashboard2"]
                ],
                decls: 555,
                vars: 25,
                consts: [
                    [1, "content"],
                    [1, "content-block"],
                    [1, "block-header"],
                    [3, "title", "items", "active_item"],
                    [1, "row"],
                    [1, "col-xl-3", "col-lg-6"],
                    [1, "card", "l-bg-green-dark"],
                    [1, "card-statistic-3"],
                    [1, "card-icon", "card-icon-large"],
                    [1, "fa", "fa-briefcase"],
                    [1, "card-content"],
                    [1, "card-title"],
                    [1, "data-1"],
                    ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "orange-progress", "mt-2", "mb-2"],
                    [1, "mb-0", "text-sm"],
                    [1, "mr-2"],
                    [1, "fa", "fa-arrow-up"],
                    [1, "text-nowrap"],
                    [1, "card", "l-bg-cyan-dark"],
                    [1, "fas", "fa-users"],
                    ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "purple-progress", "mt-2", "mb-2"],
                    [1, "card", "l-bg-purple-dark"],
                    [1, "fa", "fa-globe"],
                    ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "green-progress", "mt-2", "mb-2"],
                    [1, "card", "l-bg-orange-dark"],
                    [1, "fa", "fa-money-bill-alt"],
                    ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "sky-progress", "mt-2", "mb-2"],
                    [1, "fa", "fa-arrow-down"],
                    [1, "row", "clearfix"],
                    [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"],
                    [1, "card"],
                    [1, "header"],
                    [1, "body"],
                    [1, "recent-report__chart"],
                    [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"],
                    [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"],
                    ["id", "chart"],
                    [1, "apex-pie-center", 3, "series", "chart", "labels", "responsive", "dataLabels", "legend"],
                    [1, "table-responsive", "m-t-15"],
                    [1, "table", "align-items-center"],
                    [1, "fa", "fa-circle", "col-cyan", "msr-2"],
                    [1, "col-green"],
                    [1, "fa", "fa-circle", "col-blue", "msr-2"],
                    [1, "fa", "fa-circle", "col-orange", "msr-2"],
                    [1, "col-orange"],
                    [1, "fa", "fa-circle", "col-green", "msr-2"],
                    [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"],
                    ["mat-icon-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"],
                    ["menu", "matMenu"],
                    ["mat-menu-item", ""],
                    ["mat-menu-item", "", "disabled", ""],
                    ["visibility", "hover", 2, "height", "380px"],
                    [1, "recent-comment"],
                    [1, "notice-board"],
                    [1, "table-img"],
                    ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"],
                    [1, "notice-body"],
                    [1, "notice-heading", "col-green"],
                    [1, "text-muted"],
                    ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"],
                    [1, "notice-heading", "color-primary", "col-indigo"],
                    [1, "comment-date"],
                    ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"],
                    [1, "notice-heading", "color-danger", "col-cyan"],
                    [1, "notice-board", "no-border"],
                    ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"],
                    [1, "notice-heading", "color-info", "col-orange"],
                    ["src", "assets/images/user/user9.jpg", "alt", "...", 1, "notice-object"],
                    [1, "notice-heading", "color-primary", "col-red"],
                    ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"],
                    [1, "notice-heading", "color-primary", "col-green"],
                    ["visibility", "hover", 2, "height", "410px"],
                    [1, "tableBody"],
                    [1, "responsive_table"],
                    [1, "table", "table-hover"],
                    ["mode", "determinate", "value", "30", "color", "warn", 1, "progress-round"],
                    ["mode", "determinate", "value", "55", 1, "progress-round"],
                    ["mode", "determinate", "value", "67", 1, "progress-round", "orange-progress"],
                    ["mode", "determinate", "value", "70", 1, "progress-round", "green-progress"],
                    ["mode", "determinate", "value", "24", 1, "progress-round", "red-progress"],
                    ["mode", "determinate", "value", "77", 1, "progress-round", "green-progress"],
                    ["mode", "determinate", "value", "41", 1, "progress-round", "cyan-progress"],
                    ["mode", "determinate", "value", "41", 1, "progress-round", "orange-progress"],
                    [1, "totalEarning"],
                    ["id", "skills", 1, "tab-pane", "body"],
                    [1, "list-unstyled"],
                    [1, "mb-2"],
                    [1, "progress-label"],
                    [1, "float-end", "progress-percent", "label", "label-info", "m-b-5"],
                    [1, "progress", "skill-progress", "m-b-20", "w-100"],
                    ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"],
                    [1, "float-start", "progress-label"],
                    [1, "float-end", "progress-percent", "label", "label-danger", "m-b-5"],
                    ["role", "progressbar", "aria-valuenow", "27", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-27"],
                    [1, "float-end", "progress-percent", "label", "label-primary", "m-b-5"],
                    ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-25"],
                    [1, "float-end", "progress-percent", "label", "label-success", "m-b-5"],
                    ["role", "progressbar", "aria-valuenow", "18", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-18"],
                    [1, "float-end", "progress-percent", "label", "label-warning", "m-b-5"],
                    ["role", "progressbar", "aria-valuenow", "13", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-13"],
                    [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"],
                    ["id", "support_table", 1, "table", "display", "product-overview", "mb-30"],
                    ["src", "assets/images/user/user1.jpg", "alt", "", 1, "user_img"],
                    [1, "badge", "badge-solid-green"],
                    ["mat-stroked-button", "", "color", "primary"],
                    ["src", "assets/images/user/user2.jpg", "alt", "", 1, "user_img"],
                    [1, "badge", "badge-solid-orange"],
                    ["src", "assets/images/user/user3.jpg", "alt", "", 1, "user_img"],
                    [1, "badge", "badge-solid-blue"],
                    ["src", "assets/images/user/user4.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user5.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user6.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user7.jpg", "alt", "", 1, "user_img"],
                    ["src", "assets/images/user/user8.jpg", "alt", "", 1, "user_img"]
                ],
                template: function(i, r) {
                    if (1 & i && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "app-breadcrumb", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8), e._UZ(9, "i", 9), e.qZA(), e.TgZ(10, "div", 10)(11, "h4", 11), e._uU(12, "New Projects"), e.qZA(), e.TgZ(13, "span", 12), e._uU(14, "102"), e.qZA(), e._UZ(15, "mat-progress-bar", 13), e.TgZ(16, "p", 14)(17, "span", 15), e._UZ(18, "i", 16), e._uU(19, " 10%"), e.qZA(), e.TgZ(20, "span", 17), e._uU(21, " Since last month"), e.qZA()()()()()(), e.TgZ(22, "div", 5)(23, "div", 18)(24, "div", 7)(25, "div", 8), e._UZ(26, "i", 19), e.qZA(), e.TgZ(27, "div", 10)(28, "h4", 11), e._uU(29, "New Customers"), e.qZA(), e.TgZ(30, "span", 12), e._uU(31, "154"), e.qZA(), e._UZ(32, "mat-progress-bar", 20), e.TgZ(33, "p", 14)(34, "span", 15), e._UZ(35, "i", 16), e._uU(36, " 04%"), e.qZA(), e.TgZ(37, "span", 17), e._uU(38, " Since last month"), e.qZA()()()()()(), e.TgZ(39, "div", 5)(40, "div", 21)(41, "div", 7)(42, "div", 8), e._UZ(43, "i", 22), e.qZA(), e.TgZ(44, "div", 10)(45, "h4", 11), e._uU(46, "Inquiry"), e.qZA(), e.TgZ(47, "span", 12), e._uU(48, "524"), e.qZA(), e._UZ(49, "mat-progress-bar", 23), e.TgZ(50, "p", 14)(51, "span", 15), e._UZ(52, "i", 16), e._uU(53, " 23%"), e.qZA(), e.TgZ(54, "span", 17), e._uU(55, " Since last month"), e.qZA()()()()()(), e.TgZ(56, "div", 5)(57, "div", 24)(58, "div", 7)(59, "div", 8), e._UZ(60, "i", 25), e.qZA(), e.TgZ(61, "div", 10)(62, "h4", 11), e._uU(63, "Earning"), e.qZA(), e.TgZ(64, "span", 12), e._uU(65, "$2,453"), e.qZA(), e._UZ(66, "mat-progress-bar", 26), e.TgZ(67, "p", 14)(68, "span", 15), e._UZ(69, "i", 27), e._uU(70, " 06%"), e.qZA(), e.TgZ(71, "span", 17), e._uU(72, " Since last month"), e.qZA()()()()()()(), e.TgZ(73, "div", 28)(74, "div", 29)(75, "div", 30)(76, "div", 31)(77, "h2"), e._uU(78, "Employee Performance"), e.qZA()(), e.TgZ(79, "div", 32)(80, "div", 33), e._UZ(81, "apx-chart", 34), e.qZA()()()(), e.TgZ(82, "div", 35)(83, "div", 30)(84, "div", 31)(85, "h2"), e._uU(86, "Country Wise Clients"), e.qZA()(), e.TgZ(87, "div", 32)(88, "div", 36), e._UZ(89, "apx-chart", 37), e.qZA(), e.TgZ(90, "div", 38)(91, "table", 39)(92, "tbody")(93, "tr")(94, "td"), e._UZ(95, "i", 40), e._uU(96, " India"), e.qZA(), e.TgZ(97, "td"), e._uU(98, "23"), e.qZA(), e.TgZ(99, "td", 41), e._uU(100, "+32%"), e.qZA()(), e.TgZ(101, "tr")(102, "td"), e._UZ(103, "i", 42), e._uU(104, "USA"), e.qZA(), e.TgZ(105, "td"), e._uU(106, "32"), e.qZA(), e.TgZ(107, "td", 41), e._uU(108, "+12%"), e.qZA()(), e.TgZ(109, "tr")(110, "td"), e._UZ(111, "i", 43), e._uU(112, "Shrilanka"), e.qZA(), e.TgZ(113, "td"), e._uU(114, "12"), e.qZA(), e.TgZ(115, "td", 44), e._uU(116, "-12%"), e.qZA()(), e.TgZ(117, "tr")(118, "td"), e._UZ(119, "i", 45), e._uU(120, "Australia"), e.qZA(), e.TgZ(121, "td"), e._uU(122, "32"), e.qZA(), e.TgZ(123, "td", 41), e._uU(124, "+3%"), e.qZA()()()()()()()()(), e.TgZ(125, "div", 28)(126, "div", 46)(127, "div", 30)(128, "div", 31)(129, "h2"), e._uU(130, "Notice Board"), e.qZA(), e.TgZ(131, "button", 47)(132, "mat-icon"), e._uU(133, "more_vert"), e.qZA()(), e.TgZ(134, "mat-menu", null, 48)(136, "button", 49)(137, "mat-icon"), e._uU(138, "add_circle_outline"), e.qZA(), e.TgZ(139, "span"), e._uU(140, "Add"), e.qZA()(), e.TgZ(141, "button", 50)(142, "mat-icon"), e._uU(143, "delete_outline"), e.qZA(), e.TgZ(144, "span"), e._uU(145, "Delete"), e.qZA()(), e.TgZ(146, "button", 49)(147, "mat-icon"), e._uU(148, "refresh"), e.qZA(), e.TgZ(149, "span"), e._uU(150, "Refresh"), e.qZA()()()(), e.TgZ(151, "div", 32)(152, "ng-scrollbar", 51)(153, "div", 52)(154, "div", 53)(155, "div", 54), e._UZ(156, "img", 55), e.qZA(), e.TgZ(157, "div", 56)(158, "h6", 57), e._uU(159, "Airi Satou"), e.qZA(), e.TgZ(160, "p"), e._uU(161, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam."), e.qZA(), e.TgZ(162, "small", 58), e._uU(163, "7 hours ago"), e.qZA()()(), e.TgZ(164, "div", 53)(165, "div", 54), e._UZ(166, "img", 59), e.qZA(), e.TgZ(167, "div", 56)(168, "h6", 60), e._uU(169, "Sarah Smith"), e.qZA(), e.TgZ(170, "p"), e._uU(171, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam."), e.qZA(), e.TgZ(172, "p", 61), e._uU(173, "1 hour ago"), e.qZA()()(), e.TgZ(174, "div", 53)(175, "div", 54), e._UZ(176, "img", 62), e.qZA(), e.TgZ(177, "div", 56)(178, "h6", 63), e._uU(179, "Cara Stevens"), e.qZA(), e.TgZ(180, "p"), e._uU(181, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam."), e.qZA(), e.TgZ(182, "div", 61), e._uU(183, "Yesterday"), e.qZA()()(), e.TgZ(184, "div", 64)(185, "div", 54), e._UZ(186, "img", 65), e.qZA(), e.TgZ(187, "div", 56)(188, "h6", 66), e._uU(189, "Ashton Cox"), e.qZA(), e.TgZ(190, "p"), e._uU(191, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam."), e.qZA(), e.TgZ(192, "div", 61), e._uU(193, "Yesterday"), e.qZA()()(), e.TgZ(194, "div", 53)(195, "div", 54), e._UZ(196, "img", 67), e.qZA(), e.TgZ(197, "div", 56)(198, "h6", 68), e._uU(199, "Mark Hay"), e.qZA(), e.TgZ(200, "p"), e._uU(201, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam."), e.qZA(), e.TgZ(202, "p", 61), e._uU(203, "1 hour ago"), e.qZA()()(), e.TgZ(204, "div", 53)(205, "div", 54), e._UZ(206, "img", 69), e.qZA(), e.TgZ(207, "div", 56)(208, "h6", 70), e._uU(209, "Jay Pandya"), e.qZA(), e.TgZ(210, "p"), e._uU(211, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam."), e.qZA(), e.TgZ(212, "p", 61), e._uU(213, "3 hour ago"), e.qZA()()()()()()()(), e.TgZ(214, "div", 35)(215, "div", 30)(216, "div", 31)(217, "h2"), e._uU(218, "Project Status"), e.qZA()(), e.TgZ(219, "ng-scrollbar", 71)(220, "div", 72)(221, "div", 73)(222, "table", 74)(223, "thead")(224, "tr")(225, "th"), e._uU(226, "Project Name"), e.qZA(), e.TgZ(227, "th"), e._uU(228, "Progress"), e.qZA(), e.TgZ(229, "th"), e._uU(230, "Duration"), e.qZA()()(), e.TgZ(231, "tbody")(232, "tr")(233, "td"), e._uU(234, "Project A"), e.qZA(), e.TgZ(235, "td"), e._uU(236, "30%"), e._UZ(237, "mat-progress-bar", 75), e.qZA(), e.TgZ(238, "td"), e._uU(239, "2 Months"), e.qZA()(), e.TgZ(240, "tr")(241, "td"), e._uU(242, "Project B"), e.qZA(), e.TgZ(243, "td"), e._uU(244, "55%"), e._UZ(245, "mat-progress-bar", 76), e.qZA(), e.TgZ(246, "td"), e._uU(247, "3 Months"), e.qZA()(), e.TgZ(248, "tr")(249, "td"), e._uU(250, "Project C"), e.qZA(), e.TgZ(251, "td"), e._uU(252, "67%"), e._UZ(253, "mat-progress-bar", 77), e.qZA(), e.TgZ(254, "td"), e._uU(255, "1 Months"), e.qZA()(), e.TgZ(256, "tr")(257, "td"), e._uU(258, "Project D"), e.qZA(), e.TgZ(259, "td"), e._uU(260, "70%"), e._UZ(261, "mat-progress-bar", 78), e.qZA(), e.TgZ(262, "td"), e._uU(263, "2 Months"), e.qZA()(), e.TgZ(264, "tr")(265, "td"), e._uU(266, "Project E"), e.qZA(), e.TgZ(267, "td"), e._uU(268, "24%"), e._UZ(269, "mat-progress-bar", 79), e.qZA(), e.TgZ(270, "td"), e._uU(271, "3 Months"), e.qZA()(), e.TgZ(272, "tr")(273, "td"), e._uU(274, "Project F"), e.qZA(), e.TgZ(275, "td"), e._uU(276, "77%"), e._UZ(277, "mat-progress-bar", 80), e.qZA(), e.TgZ(278, "td"), e._uU(279, "4 Months"), e.qZA()(), e.TgZ(280, "tr")(281, "td"), e._uU(282, "Project G"), e.qZA(), e.TgZ(283, "td"), e._uU(284, "41%"), e._UZ(285, "mat-progress-bar", 81), e.qZA(), e.TgZ(286, "td"), e._uU(287, "2 Months"), e.qZA()(), e.TgZ(288, "tr")(289, "td"), e._uU(290, "Project H"), e.qZA(), e.TgZ(291, "td"), e._uU(292, "41%"), e._UZ(293, "mat-progress-bar", 82), e.qZA(), e.TgZ(294, "td"), e._uU(295, "2 Months"), e.qZA()()()()()()()()(), e.TgZ(296, "div", 46)(297, "div", 30)(298, "div", 31)(299, "h2"), e._uU(300, "Earning Source"), e.qZA()(), e.TgZ(301, "div", 32)(302, "div", 83)(303, "h2"), e._uU(304, "$90,808"), e.qZA()(), e.TgZ(305, "div", 84)(306, "ul", 85)(307, "li")(308, "div", 86)(309, "span", 87), e._uU(310, "envato.com"), e.qZA(), e.TgZ(311, "span", 88), e._uU(312, "17%"), e.qZA()(), e.TgZ(313, "div", 89), e._UZ(314, "div", 90), e.qZA()(), e.TgZ(315, "li")(316, "div", 86)(317, "span", 91), e._uU(318, "google.com"), e.qZA(), e.TgZ(319, "span", 92), e._uU(320, "27%"), e.qZA()(), e.TgZ(321, "div", 89), e._UZ(322, "div", 93), e.qZA()(), e.TgZ(323, "li")(324, "div", 86)(325, "span", 91), e._uU(326, "yahoo.com"), e.qZA(), e.TgZ(327, "span", 94), e._uU(328, "25%"), e.qZA()(), e.TgZ(329, "div", 89), e._UZ(330, "div", 95), e.qZA()(), e.TgZ(331, "li")(332, "div", 86)(333, "span", 91), e._uU(334, "store"), e.qZA(), e.TgZ(335, "span", 96), e._uU(336, "18%"), e.qZA()(), e.TgZ(337, "div", 89), e._UZ(338, "div", 97), e.qZA()(), e.TgZ(339, "li")(340, "div", 86)(341, "span", 91), e._uU(342, "Others"), e.qZA(), e.TgZ(343, "span", 98), e._uU(344, "13%"), e.qZA()(), e.TgZ(345, "div", 89), e._UZ(346, "div", 99), e.qZA()()()()()()()(), e.TgZ(347, "div", 28)(348, "div", 100)(349, "div", 30)(350, "div", 31)(351, "h2"), e._uU(352, "Leave Requests"), e.qZA(), e.TgZ(353, "button", 47)(354, "mat-icon"), e._uU(355, "more_vert"), e.qZA()(), e.TgZ(356, "mat-menu", null, 48)(358, "button", 49)(359, "mat-icon"), e._uU(360, "add_circle_outline"), e.qZA(), e.TgZ(361, "span"), e._uU(362, "Add"), e.qZA()(), e.TgZ(363, "button", 50)(364, "mat-icon"), e._uU(365, "delete_outline"), e.qZA(), e.TgZ(366, "span"), e._uU(367, "Delete"), e.qZA()(), e.TgZ(368, "button", 49)(369, "mat-icon"), e._uU(370, "refresh"), e.qZA(), e.TgZ(371, "span"), e._uU(372, "Refresh"), e.qZA()()()(), e.TgZ(373, "div", 72)(374, "div", 73)(375, "table", 101)(376, "thead")(377, "tr")(378, "th"), e._uU(379, "ID"), e.qZA(), e.TgZ(380, "th"), e._uU(381, "Employee Name"), e.qZA(), e.TgZ(382, "th"), e._uU(383, "Leave Type"), e.qZA(), e.TgZ(384, "th"), e._uU(385, "Leave From"), e.qZA(), e.TgZ(386, "th"), e._uU(387, "Leave To"), e.qZA(), e.TgZ(388, "th"), e._uU(389, "Days"), e.qZA(), e.TgZ(390, "th"), e._uU(391, "Status"), e.qZA(), e.TgZ(392, "th"), e._uU(393, "Details"), e.qZA()()(), e.TgZ(394, "tbody")(395, "tr")(396, "td"), e._uU(397, "ID7865"), e.qZA(), e.TgZ(398, "td"), e._UZ(399, "img", 102), e._uU(400, "Jens Brincker"), e.qZA(), e.TgZ(401, "td"), e._uU(402, "Sick Leave"), e.qZA(), e.TgZ(403, "td"), e._uU(404, "22/05/2021"), e.qZA(), e.TgZ(405, "td"), e._uU(406, "27/05/2021"), e.qZA(), e.TgZ(407, "td"), e._uU(408, "6"), e.qZA(), e.TgZ(409, "td")(410, "div", 103), e._uU(411, "Approve"), e.qZA()(), e.TgZ(412, "td")(413, "button", 104), e._uU(414, "Details"), e.qZA()()(), e.TgZ(415, "tr")(416, "td"), e._uU(417, "ID9357"), e.qZA(), e.TgZ(418, "td"), e._UZ(419, "img", 105), e._uU(420, "Mark Harry"), e.qZA(), e.TgZ(421, "td"), e._uU(422, "Casual Leave"), e.qZA(), e.TgZ(423, "td"), e._uU(424, "12/06/2021"), e.qZA(), e.TgZ(425, "td"), e._uU(426, "15/06/2021"), e.qZA(), e.TgZ(427, "td"), e._uU(428, "4"), e.qZA(), e.TgZ(429, "td")(430, "div", 106), e._uU(431, "Reject"), e.qZA()(), e.TgZ(432, "td")(433, "button", 104), e._uU(434, "Details"), e.qZA()()(), e.TgZ(435, "tr")(436, "td"), e._uU(437, "ID3987"), e.qZA(), e.TgZ(438, "td"), e._UZ(439, "img", 107), e._uU(440, "Anthony Davie"), e.qZA(), e.TgZ(441, "td"), e._uU(442, "Marriage Leave"), e.qZA(), e.TgZ(443, "td"), e._uU(444, "02/02/2021"), e.qZA(), e.TgZ(445, "td"), e._uU(446, "12/02/2021"), e.qZA(), e.TgZ(447, "td"), e._uU(448, "6"), e.qZA(), e.TgZ(449, "td")(450, "div", 108), e._uU(451, "Pending"), e.qZA()(), e.TgZ(452, "td")(453, "button", 104), e._uU(454, "Details"), e.qZA()()(), e.TgZ(455, "tr")(456, "td"), e._uU(457, "ID2483"), e.qZA(), e.TgZ(458, "td"), e._UZ(459, "img", 109), e._uU(460, "David Perry"), e.qZA(), e.TgZ(461, "td"), e._uU(462, "Maternity leave"), e.qZA(), e.TgZ(463, "td"), e._uU(464, "10/01/2021"), e.qZA(), e.TgZ(465, "td"), e._uU(466, "10/03/2021"), e.qZA(), e.TgZ(467, "td"), e._uU(468, "90"), e.qZA(), e.TgZ(469, "td")(470, "div", 103), e._uU(471, "Approve"), e.qZA()(), e.TgZ(472, "td")(473, "button", 104), e._uU(474, "Details"), e.qZA()()(), e.TgZ(475, "tr")(476, "td"), e._uU(477, "ID2986"), e.qZA(), e.TgZ(478, "td"), e._UZ(479, "img", 110), e._uU(480, "John Doe"), e.qZA(), e.TgZ(481, "td"), e._uU(482, "Unpaid Leave"), e.qZA(), e.TgZ(483, "td"), e._uU(484, "20/05/2021"), e.qZA(), e.TgZ(485, "td"), e._uU(486, "22/05/2021"), e.qZA(), e.TgZ(487, "td"), e._uU(488, "3"), e.qZA(), e.TgZ(489, "td")(490, "div", 106), e._uU(491, "Reject"), e.qZA()(), e.TgZ(492, "td")(493, "button", 104), e._uU(494, "Details"), e.qZA()()(), e.TgZ(495, "tr")(496, "td"), e._uU(497, "ID1267"), e.qZA(), e.TgZ(498, "td"), e._UZ(499, "img", 111), e._uU(500, "Sarah Smith"), e.qZA(), e.TgZ(501, "td"), e._uU(502, "Sick Leave"), e.qZA(), e.TgZ(503, "td"), e._uU(504, "10/07/2021"), e.qZA(), e.TgZ(505, "td"), e._uU(506, "11/07/2021"), e.qZA(), e.TgZ(507, "td"), e._uU(508, "2"), e.qZA(), e.TgZ(509, "td")(510, "div", 103), e._uU(511, "Approve"), e.qZA()(), e.TgZ(512, "td")(513, "button", 104), e._uU(514, "Details"), e.qZA()()(), e.TgZ(515, "tr")(516, "td"), e._uU(517, "ID3398"), e.qZA(), e.TgZ(518, "td"), e._UZ(519, "img", 112), e._uU(520, "Cara Stevens"), e.qZA(), e.TgZ(521, "td"), e._uU(522, "Casual leave"), e.qZA(), e.TgZ(523, "td"), e._uU(524, "11/04/2021"), e.qZA(), e.TgZ(525, "td"), e._uU(526, "13/04/2021"), e.qZA(), e.TgZ(527, "td"), e._uU(528, "3"), e.qZA(), e.TgZ(529, "td")(530, "div", 108), e._uU(531, "Pending"), e.qZA()(), e.TgZ(532, "td")(533, "button", 104), e._uU(534, "Details"), e.qZA()()(), e.TgZ(535, "tr")(536, "td"), e._uU(537, "ID9965"), e.qZA(), e.TgZ(538, "td"), e._UZ(539, "img", 113), e._uU(540, "Ashton Cox"), e.qZA(), e.TgZ(541, "td"), e._uU(542, "Sick Leave"), e.qZA(), e.TgZ(543, "td"), e._uU(544, "14/05/2021"), e.qZA(), e.TgZ(545, "td"), e._uU(546, "15/05/2021"), e.qZA(), e.TgZ(547, "td"), e._uU(548, "2"), e.qZA(), e.TgZ(549, "td")(550, "div", 103), e._uU(551, "Approve"), e.qZA()(), e.TgZ(552, "td")(553, "button", 104), e._uU(554, "Details"), e.qZA()()()()()()()()()()()()), 2 & i) {
                        const T = e.MAs(135);
                        e.xp6(3), e.Q6J("title", "Dashboad 2")("items", e.DdM(24, C))("active_item", "Dashboad 2"), e.xp6(78), e.Q6J("series", r.lineChartOptions.series)("chart", r.lineChartOptions.chart)("xaxis", r.lineChartOptions.xaxis)("stroke", r.lineChartOptions.stroke)("colors", r.lineChartOptions.colors)("dataLabels", r.lineChartOptions.dataLabels)("legend", r.lineChartOptions.legend)("tooltip", r.lineChartOptions.tooltip)("markers", r.lineChartOptions.markers)("grid", r.lineChartOptions.grid)("yaxis", r.lineChartOptions.yaxis)("title", r.lineChartOptions.title)("fill", r.lineChartOptions.fill), e.xp6(8), e.Q6J("series", r.pieChartOptions.series2)("chart", r.pieChartOptions.chart)("labels", r.pieChartOptions.labels)("responsive", r.pieChartOptions.responsive)("dataLabels", r.pieChartOptions.dataLabels)("legend", r.pieChartOptions.legend), e.xp6(42), e.Q6J("matMenuTriggerFor", T), e.xp6(222), e.Q6J("matMenuTriggerFor", T)
                    }
                },
                dependencies: [u.x, h.KC, g.Hw, m.lW, m.RK, p.VK, p.OP, p.p6, s.pW, n.L]
            });
            const k = [{
                path: "",
                redirectTo: "main",
                pathMatch: "full"
            }, {
                path: "main",
                component: _
            }, {
                path: "dashboard2",
                component: f
            }, {
                path: "**",
                component: d.J
            }];
            class v {}
            v.\u0275fac = function(i) {
                return new(i || v)
            }, v.\u0275mod = e.oAB({
                type: v
            }), v.\u0275inj = e.cJS({
                imports: [Z.Bz.forChild(k), Z.Bz]
            });
            var D = a(5626),
                w = a(4844);
            class q {}
            q.\u0275fac = function(i) {
                return new(i || q)
            }, q.\u0275mod = e.oAB({
                type: q
            }), q.\u0275inj = e.cJS({
                imports: [t.ez, v, A.vQ, u.X, h.kb, g.Ps, m.ot, p.Tx, y.AV, s.Cv, D.K, w.m]
            })
        },
        1299: (O, U, a) => {
            a.d(U, {
                L: () => A
            });
            var t = a(4650),
                h = a(6895),
                d = a(9132),
                Z = a(1676);

            function e(u, g) {
                if (1 & u && (t.TgZ(0, "li", 11), t._uU(1), t.qZA()), 2 & u) {
                    const m = g.$implicit;
                    t.xp6(1), t.Oqu(m)
                }
            }
            class A {
                constructor() {}
            }
            A.\u0275fac = function(g) {
                return new(g || A)
            }, A.\u0275cmp = t.Xpm({
                type: A,
                selectors: [
                    ["app-breadcrumb"]
                ],
                inputs: {
                    title: "title",
                    items: "items",
                    active_item: "active_item"
                },
                decls: 14,
                vars: 7,
                consts: [
                    [1, "breadcrumb-main"],
                    [1, "row"],
                    [1, "col-6"],
                    [1, "breadcrumb-title"],
                    [1, "page-title"],
                    [1, "breadcrumb-list"],
                    [1, "breadcrumb-item", "bcrumb-1"],
                    [3, "routerLink"],
                    [3, "icon"],
                    ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"],
                    [1, "breadcrumb-item", "active"],
                    [1, "breadcrumb-item"]
                ],
                template: function(g, m) {
                    1 & g && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4), t._uU(5), t.qZA()()(), t.TgZ(6, "div", 2)(7, "ul", 5)(8, "li", 6)(9, "a", 7), t._UZ(10, "app-feather-icons", 8), t.qZA()(), t.YNc(11, e, 2, 1, "li", 9), t.TgZ(12, "li", 10), t._uU(13), t.qZA()()()()()), 2 & g && (t.xp6(5), t.Oqu(m.title), t.xp6(4), t.Q6J("routerLink", "/admin/dashboard/main"), t.xp6(1), t.Tol("breadcrumb-icon"), t.Q6J("icon", "home"), t.xp6(1), t.Q6J("ngForOf", m.items), t.xp6(2), t.Oqu(m.active_item))
                },
                dependencies: [h.sg, d.rH, Z.A]
            })
        },
        5626: (O, U, a) => {
            a.d(U, {
                K: () => d
            });
            var t = a(4844),
                h = a(4650);
            class d {}
            d.\u0275fac = function(e) {
                return new(e || d)
            }, d.\u0275mod = h.oAB({
                type: d
            }), d.\u0275inj = h.cJS({
                imports: [t.m]
            })
        },
        3162: (O, U, a) => {
            a.d(U, {
                Cv: () => y,
                pW: () => m
            });
            var t = a(4650),
                d = (a(6895), a(3238)),
                Z = a(1281);
            const e = new t.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),
                g = (0, d.pj)(class {
                    constructor(s) {
                        this._elementRef = s
                    }
                }, "primary");
            let m = (() => {
                class s extends g {
                    constructor(o, l, x, c, _) {
                        super(o), this._ngZone = l, this._changeDetectorRef = x, this._animationMode = c, this._isNoopAnimation = !1, this._value = 0, this._bufferValue = 0, this.animationEnd = new t.vpe, this._mode = "determinate", this._transitionendHandler = C => {
                            0 === this.animationEnd.observers.length || !C.target || !C.target.classList.contains("mdc-linear-progress__primary-bar") || ("determinate" === this.mode || "buffer" === this.mode) && this._ngZone.run(() => this.animationEnd.next({
                                value: this.value
                            }))
                        }, this._isNoopAnimation = "NoopAnimations" === c, _ && (_.color && (this.color = this.defaultColor = _.color), this.mode = _.mode || this.mode)
                    }
                    get value() {
                        return this._value
                    }
                    set value(o) {
                        this._value = p((0, Z.su)(o)), this._changeDetectorRef.markForCheck()
                    }
                    get bufferValue() {
                        return this._bufferValue || 0
                    }
                    set bufferValue(o) {
                        this._bufferValue = p((0, Z.su)(o)), this._changeDetectorRef.markForCheck()
                    }
                    get mode() {
                        return this._mode
                    }
                    set mode(o) {
                        this._mode = o, this._changeDetectorRef.markForCheck()
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
                return s.\u0275fac = function(o) {
                    return new(o || s)(t.Y36(t.SBq), t.Y36(t.R0b), t.Y36(t.sBO), t.Y36(t.QbO, 8), t.Y36(e, 8))
                }, s.\u0275cmp = t.Xpm({
                    type: s,
                    selectors: [
                        ["mat-progress-bar"]
                    ],
                    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
                    hostVars: 8,
                    hostBindings: function(o, l) {
                        2 & o && (t.uIk("aria-valuenow", l._isIndeterminate() ? null : l.value)("mode", l.mode), t.ekj("_mat-animation-noopable", l._isNoopAnimation)("mdc-linear-progress--animation-ready", !l._isNoopAnimation)("mdc-linear-progress--indeterminate", l._isIndeterminate()))
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
                    features: [t.qOj],
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
                    template: function(o, l) {
                        1 & o && (t.TgZ(0, "div", 0), t._UZ(1, "div", 1)(2, "div", 2), t.qZA(), t.TgZ(3, "div", 3), t._UZ(4, "span", 4), t.qZA(), t.TgZ(5, "div", 5), t._UZ(6, "span", 4), t.qZA()), 2 & o && (t.xp6(1), t.Udp("flex-basis", l._getBufferBarFlexBasis()), t.xp6(2), t.Udp("transform", l._getPrimaryBarTransform()))
                    },
                    styles: ["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],
                    encapsulation: 2,
                    changeDetection: 0
                }), s
            })();

            function p(s, n = 0, o = 100) {
                return Math.max(n, Math.min(o, s))
            }
            let y = (() => {
                class s {}
                return s.\u0275fac = function(o) {
                    return new(o || s)
                }, s.\u0275mod = t.oAB({
                    type: s
                }), s.\u0275inj = t.cJS({
                    imports: [d.BQ]
                }), s
            })()
        }
    }
]);