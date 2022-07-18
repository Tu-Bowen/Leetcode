
            if (grid[i][j] === 1) {
                dp[i][j] = { left: dp[i][j - 1].left + 1, top: dp[i - 1][j].top + 1 }
                let minlen = Math.min(dp[i][j].left, dp[i][j - 1].top)
                if (i - minlen + 1>=0&&dp[i - minlen + 1][j].left >= minlen &&j-minlen+1