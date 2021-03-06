var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "6579",
        "ko": "3421"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "2068"
    },
    "maxResponseTime": {
        "total": "8142",
        "ok": "8142",
        "ko": "5609"
    },
    "meanResponseTime": {
        "total": "3903",
        "ok": "4132",
        "ko": "3464"
    },
    "standardDeviation": {
        "total": "1595",
        "ok": "1844",
        "ko": "775"
    },
    "percentiles1": {
        "total": "3539",
        "ok": "4085",
        "ko": "3368"
    },
    "percentiles2": {
        "total": "5157",
        "ok": "5777",
        "ko": "3954"
    },
    "percentiles3": {
        "total": "6818",
        "ok": "7011",
        "ko": "5009"
    },
    "percentiles4": {
        "total": "7354",
        "ok": "7473",
        "ko": "5513"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 54,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6473,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 3421,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "548.25",
        "ko": "285.083"
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
        "total": "5000",
        "ok": "2301",
        "ko": "2699"
    },
    "minResponseTime": {
        "total": "778",
        "ok": "778",
        "ko": "2290"
    },
    "maxResponseTime": {
        "total": "8142",
        "ok": "8142",
        "ko": "5609"
    },
    "meanResponseTime": {
        "total": "4028",
        "ok": "4515",
        "ko": "3612"
    },
    "standardDeviation": {
        "total": "1637",
        "ok": "2162",
        "ko": "776"
    },
    "percentiles1": {
        "total": "3657",
        "ok": "5283",
        "ko": "3556"
    },
    "percentiles2": {
        "total": "5259",
        "ok": "6509",
        "ko": "4155"
    },
    "percentiles3": {
        "total": "7023",
        "ok": "7306",
        "ko": "5047"
    },
    "percentiles4": {
        "total": "7511",
        "ok": "7701",
        "ko": "5525"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 51,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2249,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 2699,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "416.667",
        "ok": "191.75",
        "ko": "224.917"
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
        "total": "5000",
        "ok": "4278",
        "ko": "722"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "2068"
    },
    "maxResponseTime": {
        "total": "7693",
        "ok": "7693",
        "ko": "4219"
    },
    "meanResponseTime": {
        "total": "3779",
        "ok": "3926",
        "ko": "2910"
    },
    "standardDeviation": {
        "total": "1542",
        "ok": "1611",
        "ko": "453"
    },
    "percentiles1": {
        "total": "3197",
        "ok": "3607",
        "ko": "2767"
    },
    "percentiles2": {
        "total": "5117",
        "ok": "5301",
        "ko": "3092"
    },
    "percentiles3": {
        "total": "6372",
        "ok": "6490",
        "ko": "3717"
    },
    "percentiles4": {
        "total": "7091",
        "ok": "7126",
        "ko": "4215"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 53,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4224,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 722,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "416.667",
        "ok": "356.5",
        "ko": "60.167"
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
