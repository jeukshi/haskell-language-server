/* tslint:disable */
"use strict";

function initProgress() {
    $(function () {
        $(".version").html("Generated by <a href='https://shakebuild.com'>Shake " + version + "</a>.");
        $("#output").html("");
        for (const x of progress) {
            var actual: [number, number][] = [];
            var ideal: [number, number][] = [];
            // Start at t = 5 seconds, since the early progress jumps a lot
            for (var t = 5; t < x.values.length; t++) {
                var y = x.values[t];
                actual.push([y.idealSecs, y.actualSecs]);
                ideal.push([y.idealSecs, y.idealSecs]);
            }
            var ys = [{ data: ideal, color: "gray" }, { label: x.name, data: actual, color: "red" }];
            var div = $("<div class='plot'>");
            $("#output").append(div);
            $.plot(div, ys, {
                xaxis: {
                    transform: function (v) { return -v; },
                    inverseTransform: function (v) { return -v; }
                }
            });
        }
    })
}