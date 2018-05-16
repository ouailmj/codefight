function optimizeAssignment($matrix) {
    $tmpMatrix = $matrix;
    $h = count($matrix);
    $w = count($matrix[0]);

    if ($h < $w) {
        for ($i = $h; $i < $w; ++$i) {
            $matrix[$i] = array_fill(0, $w, 999999);
        }
    } elseif ($w < $h) {
        foreach ($matrix as &$row) {
            for ($i = $w; $i < $h; ++$i) {
                $row[$i] = 999999;
            }
        }
    }
    $h = $w = max($h, $w);
    $u   = array_fill(0, $h, 0);
    $v   = array_fill(0, $w, 0);
    $ind = array_fill(0, $w, -1);
    foreach (range(0, $h - 1) as $i) {
        $links   = array_fill(0, $w, -1);
        $mins    = array_fill(0, $w, 999999);
        $visited = array_fill(0, $w, false);
        $markedI = $i;
        $markedJ = -1;
        $j       = 0;
        while (true) {
            $j = -1;
            foreach (range(0, $h - 1) as $j1) {
                if (!$visited[$j1]) {
                    $cur = $matrix[$markedI][$j1] - $u[$markedI] - $v[$j1];
                    if ($cur < $mins[$j1]) {
                        $mins[$j1]  = $cur;
                        $links[$j1] = $markedJ;
                    }
                    if ($j == -1 || $mins[$j1] < $mins[$j]) {
                        $j = $j1;
                    }
                }
            }

            $delta = $mins[$j];
            foreach (range(0, $w - 1) as $j1) {
                if ($visited[$j1]) {
                    $u[$ind[$j1]] += $delta;
                    $v[$j1] -= $delta;
                } else {
                    $mins[$j1] -= $delta;
                }
            }
            $u[$i] += $delta;
            $visited[$j] = true;
            $markedJ = $j;
            $markedI = $ind[$j];
            if ($markedI == -1) {
                break;
            }
        }

        while (true) {
            if ($links[$j] != -1) {
                $ind[$j] = $ind[$links[$j]];
                $j       = $links[$j];
            } else {
                break;
            }
        }
        $ind[$j] = $i;
    }

    $result = 0;

    foreach (range(0, $w - 1) as $j) {
        $result += $tmpMatrix[$ind[$j]][$j];
    }
    return $result;

}
