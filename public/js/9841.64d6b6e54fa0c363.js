"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [9841], {
        7112: (P, s, l) => {
            l.r(s), l.d(s, {
                AdminModule: () => d
            });
            var M = l(6895),
                m = l(9132),
                t = l(4650);
            const C = [{
                path: "dashboard",
                loadChildren: () => Promise.all([l.e(9481), l.e(5700), l.e(8799)]).then(l.bind(l, 8799)).then(n => n.DashboardModule)
            }, {
                path: "projects",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(5546), l.e(1948), l.e(9481), l.e(1206), l.e(3659), l.e(6170), l.e(1302), l.e(8592), l.e(7216)]).then(l.bind(l, 7216)).then(n => n.ProjectsModule)
            }, {
                path: "employees",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(5546), l.e(8592), l.e(72)]).then(l.bind(l, 72)).then(n => n.EmployeesModule)
            }, {
                path: "clients",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(5546), l.e(8592), l.e(1697)]).then(l.bind(l, 1697)).then(n => n.ClientModule)
            }, {
                path: "leaves",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(5546), l.e(1948), l.e(3546), l.e(8592), l.e(4451)]).then(l.bind(l, 4451)).then(n => n.LeavesModule)
            }, {
                path: "accounts",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(5546), l.e(8592), l.e(2983)]).then(l.bind(l, 2983)).then(n => n.AccountsModule)
            }, {
                path: "holidays",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(5546), l.e(8592), l.e(2058)]).then(l.bind(l, 2058)).then(n => n.HolidayModule)
            }, {
                path: "attendance",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(1948), l.e(3546), l.e(8027), l.e(8592), l.e(3689)]).then(l.bind(l, 3689)).then(n => n.AttendanceModule)
            }, {
                path: "payroll",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(5546), l.e(8592), l.e(860)]).then(l.bind(l, 860)).then(n => n.PayrollModule)
            }, {
                path: "leads",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(5546), l.e(8592), l.e(5657)]).then(l.bind(l, 5657)).then(n => n.LeadsModule)
            }, {
                path: "jobs",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(5546), l.e(8592), l.e(9493)]).then(l.bind(l, 9493)).then(n => n.JobsModule)
            }, {
                path: "reports",
                loadChildren: () => Promise.all([l.e(6909), l.e(5938), l.e(1307), l.e(7009), l.e(2316), l.e(6308), l.e(3848), l.e(1948), l.e(9481), l.e(1206), l.e(3659), l.e(1302), l.e(8592), l.e(2746)]).then(l.bind(l, 2746)).then(n => n.ReportsModule)
            }];
            class o {}
            o.\u0275fac = function(h) {
                return new(h || o)
            }, o.\u0275mod = t.oAB({
                type: o
            }), o.\u0275inj = t.cJS({
                imports: [m.Bz.forChild(C), m.Bz]
            });
            class d {}
            d.\u0275fac = function(h) {
                return new(h || d)
            }, d.\u0275mod = t.oAB({
                type: d
            }), d.\u0275inj = t.cJS({
                imports: [M.ez, o]
            })
        }
    }
]);