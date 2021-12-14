
//Given an object containing counts of both upvotes and downvotes, return what vote count should be
//displayed. This is calculated by subtracting the number of downvotes from upvotes.

const getVoteCount = function (obj) {
    const total = Object.values(obj)[0] - Object.values(obj)[1];
    return total
}

console.log(getVoteCount({ upVotes: 13, downVotes: 0 })); // ➞ 13

console.log(getVoteCount({ upVotes: 2, downVotes: 33 })); // ➞ -31

console.log(getVoteCount({ upVotes: 132, downVotes: 132 })); // ➞ 0