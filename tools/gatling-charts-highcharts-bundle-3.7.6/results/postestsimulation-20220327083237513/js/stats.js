var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "2045",
        "ok": "-",
        "ko": "2045"
    },
    "maxResponseTime": {
        "total": "2994",
        "ok": "-",
        "ko": "2994"
    },
    "meanResponseTime": {
        "total": "2281",
        "ok": "-",
        "ko": "2281"
    },
    "standardDeviation": {
        "total": "389",
        "ok": "-",
        "ko": "389"
    },
    "percentiles1": {
        "total": "2066",
        "ok": "-",
        "ko": "2066"
    },
    "percentiles2": {
        "total": "2097",
        "ok": "-",
        "ko": "2097"
    },
    "percentiles3": {
        "total": "2993",
        "ok": "-",
        "ko": "2993"
    },
    "percentiles4": {
        "total": "2994",
        "ok": "-",
        "ko": "2994"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "-",
        "ko": "16.667"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "2064",
        "ok": "-",
        "ko": "2064"
    },
    "maxResponseTime": {
        "total": "2994",
        "ok": "-",
        "ko": "2994"
    },
    "meanResponseTime": {
        "total": "2506",
        "ok": "-",
        "ko": "2506"
    },
    "standardDeviation": {
        "total": "448",
        "ok": "-",
        "ko": "448"
    },
    "percentiles1": {
        "total": "2097",
        "ok": "-",
        "ko": "2097"
    },
    "percentiles2": {
        "total": "2992",
        "ok": "-",
        "ko": "2992"
    },
    "percentiles3": {
        "total": "2993",
        "ok": "-",
        "ko": "2993"
    },
    "percentiles4": {
        "total": "2994",
        "ok": "-",
        "ko": "2994"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "-",
        "ko": "8.333"
    }
}
    },"req_request-2-93baf": {
        type: "REQUEST",
        name: "request_2",
path: "request_2",
pathFormatted: "req_request-2-93baf",
stats: {
    "name": "request_2",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "2045",
        "ok": "-",
        "ko": "2045"
    },
    "maxResponseTime": {
        "total": "2066",
        "ok": "-",
        "ko": "2066"
    },
    "meanResponseTime": {
        "total": "2055",
        "ok": "-",
        "ko": "2055"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "-",
        "ko": "8"
    },
    "percentiles1": {
        "total": "2051",
        "ok": "-",
        "ko": "2051"
    },
    "percentiles2": {
        "total": "2063",
        "ok": "-",
        "ko": "2063"
    },
    "percentiles3": {
        "total": "2066",
        "ok": "-",
        "ko": "2066"
    },
    "percentiles4": {
        "total": "2066",
        "ok": "-",
        "ko": "2066"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "-",
        "ko": "8.333"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
