const MARKS = "/marks";

const marksService = {
    insertReviewOneMark: `${MARKS}/create/reviewone`,
    insertReviewTwoMark: `${MARKS}/create/reviewtwo`,
    insertReviewThreeMark: `${MARKS}/create/reviewthree`,
    insertFinalReviewMark: `${MARKS}/create/finalreview`,
    getFinalMark: `${MARKS}/get/finalmark`,
}

module.exports = marksService;    