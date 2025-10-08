import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

// Load API tokens from the MySQL data
const tokens = new SharedArray('api_tokens', function () {
    return [
        'c1738968-96b0-40ef-af5b-49206dbcd56b',
        '550e8400-e29b-41d4-a716-446655440001',
        '550e8400-e29b-41d4-a716-446655440002',
        '550e8400-e29b-41d4-a716-446655440003',
        '550e8400-e29b-41d4-a716-446655440004',
        '550e8400-e29b-41d4-a716-446655440005',
        '550e8400-e29b-41d4-a716-446655440006',
        '550e8400-e29b-41d4-a716-446655440007',
        '550e8400-e29b-41d4-a716-446655440008',
        '550e8400-e29b-41d4-a716-446655440009',
        '550e8400-e29b-41d4-a716-446655440010',
        '550e8400-e29b-41d4-a716-446655440011',
        '550e8400-e29b-41d4-a716-446655440012',
        '550e8400-e29b-41d4-a716-446655440013',
        '550e8400-e29b-41d4-a716-446655440014',
        '550e8400-e29b-41d4-a716-446655440015',
        '550e8400-e29b-41d4-a716-446655440016',
        '550e8400-e29b-41d4-a716-446655440017',
        '550e8400-e29b-41d4-a716-446655440018',
        '550e8400-e29b-41d4-a716-446655440019',
        '550e8400-e29b-41d4-a716-446655440020',
        '550e8400-e29b-41d4-a716-446655440021',
        '550e8400-e29b-41d4-a716-446655440022',
        '550e8400-e29b-41d4-a716-446655440023',
        '550e8400-e29b-41d4-a716-446655440024',
        '550e8400-e29b-41d4-a716-446655440025',
        '550e8400-e29b-41d4-a716-446655440026',
        '550e8400-e29b-41d4-a716-446655440027',
        '550e8400-e29b-41d4-a716-446655440028',
        '550e8400-e29b-41d4-a716-446655440029',
        '550e8400-e29b-41d4-a716-446655440030',
        '550e8400-e29b-41d4-a716-446655440031',
        '550e8400-e29b-41d4-a716-446655440032',
        '550e8400-e29b-41d4-a716-446655440033',
        '550e8400-e29b-41d4-a716-446655440034',
        '550e8400-e29b-41d4-a716-446655440035',
        '550e8400-e29b-41d4-a716-446655440036',
        '550e8400-e29b-41d4-a716-446655440037',
        '550e8400-e29b-41d4-a716-446655440038',
        '550e8400-e29b-41d4-a716-446655440039',
        '550e8400-e29b-41d4-a716-446655440040',
        '550e8400-e29b-41d4-a716-446655440041',
        '550e8400-e29b-41d4-a716-446655440042',
        '550e8400-e29b-41d4-a716-446655440043',
        '550e8400-e29b-41d4-a716-446655440044',
        '550e8400-e29b-41d4-a716-446655440045',
        '550e8400-e29b-41d4-a716-446655440046',
        '550e8400-e29b-41d4-a716-446655440047',
        '550e8400-e29b-41d4-a716-446655440048',
        '550e8400-e29b-41d4-a716-446655440049',
        '550e8400-e29b-41d4-a716-446655440050',
        '550e8400-e29b-41d4-a716-446655440051',
        '550e8400-e29b-41d4-a716-446655440052',
        '550e8400-e29b-41d4-a716-446655440053',
        '550e8400-e29b-41d4-a716-446655440054',
        '550e8400-e29b-41d4-a716-446655440055',
        '550e8400-e29b-41d4-a716-446655440056',
        '550e8400-e29b-41d4-a716-446655440057',
        '550e8400-e29b-41d4-a716-446655440058',
        '550e8400-e29b-41d4-a716-446655440059',
        '550e8400-e29b-41d4-a716-446655440060',
        '550e8400-e29b-41d4-a716-446655440061',
        '550e8400-e29b-41d4-a716-446655440062',
        '550e8400-e29b-41d4-a716-446655440063',
        '550e8400-e29b-41d4-a716-446655440064',
        '550e8400-e29b-41d4-a716-446655440065',
        '550e8400-e29b-41d4-a716-446655440066',
        '550e8400-e29b-41d4-a716-446655440067',
        '550e8400-e29b-41d4-a716-446655440068',
        '550e8400-e29b-41d4-a716-446655440069',
        '550e8400-e29b-41d4-a716-446655440070',
        '550e8400-e29b-41d4-a716-446655440071',
        '550e8400-e29b-41d4-a716-446655440072',
        '550e8400-e29b-41d4-a716-446655440073',
        '550e8400-e29b-41d4-a716-446655440074',
        '550e8400-e29b-41d4-a716-446655440075',
        '550e8400-e29b-41d4-a716-446655440076',
        '550e8400-e29b-41d4-a716-446655440077',
        '550e8400-e29b-41d4-a716-446655440078',
        '550e8400-e29b-41d4-a716-446655440079',
        '550e8400-e29b-41d4-a716-446655440080',
        '550e8400-e29b-41d4-a716-446655440081',
        '550e8400-e29b-41d4-a716-446655440082',
        '550e8400-e29b-41d4-a716-446655440083',
        '550e8400-e29b-41d4-a716-446655440084',
        '550e8400-e29b-41d4-a716-446655440085',
        '550e8400-e29b-41d4-a716-446655440086',
        '550e8400-e29b-41d4-a716-446655440087',
        '550e8400-e29b-41d4-a716-446655440088',
        '550e8400-e29b-41d4-a716-446655440089',
        '550e8400-e29b-41d4-a716-446655440090',
        '550e8400-e29b-41d4-a716-446655440091',
        '550e8400-e29b-41d4-a716-446655440092',
        '550e8400-e29b-41d4-a716-446655440093',
        '550e8400-e29b-41d4-a716-446655440094',
        '550e8400-e29b-41d4-a716-446655440095',
        '550e8400-e29b-41d4-a716-446655440096',
        '550e8400-e29b-41d4-a716-446655440097',
        '550e8400-e29b-41d4-a716-446655440098',
        '550e8400-e29b-41d4-a716-446655440099',
        '550e8400-e29b-41d4-a716-446655440100'
    ];
});

// Test configuration
export const options = {
    scenarios: {
        api_load_test: {
            executor: 'constant-vus',
            vus: 100,           // 100 virtual users
            duration: '60s',    // 60 seconds duration
        },
    },
    thresholds: {
        http_req_failed: ['rate>0.45', 'rate<0.55'], // Expect 45-55% failure rate (429 errors)
        http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
        'http_req_failed{status:429}': ['rate>0.45', 'rate<0.55'], // 45-55% should be 429 errors
    },
};

export default function () {
    // Get unique token for this VU
    const vuId = __VU - 1; // VU IDs start from 1, array indices start from 0
    const apiToken = tokens[vuId % tokens.length]; // Use modulo to handle case where VUs > tokens

    // Headers for the API request
    const headers = {
        'Accept': 'application/json',
        'X-API-TOKEN': apiToken,
    };

    // Send 20 requests per second per VU (exceeding rate limit of 10/sec)
    for (let i = 0; i < 20; i++) {
        const response = http.get('http://localhost:8080/api/users/current', {
            headers: headers,
            tags: {
                request_batch: i + 1,
                vu_id: __VU
            }
        });

        // Check response status and categorize
        check(response, {
            'status is 200 (success)': (r) => r.status === 200,
            'status is 429 (rate limited)': (r) => r.status === 429,
            'response time < 500ms': (r) => r.timings.duration < 500,
        }, {
            status_code: response.status.toString()
        });

        // If not the last request in the batch, add small delay
        if (i < 19) {
            sleep(0.05); // 50ms delay between requests (20 requests per second)
        }
    }

    // Sleep until next second (total 1 second per iteration)
    sleep(0.05); // Complete the 1-second cycle
}

export function handleSummary(data) {
    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true }),
        'summary.json': JSON.stringify(data),
    };
}

function textSummary(data, options = {}) {
    const indent = options.indent || '';
    const enableColors = options.enableColors || false;

    let summary = '';

    summary += `${indent}✓ http_reqs........................: ${data.metrics.http_reqs.values.count}\n`;
    summary += `${indent}✓ http_req_blocked..................: avg=${data.metrics.http_req_blocked.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ http_req_connecting...............: avg=${data.metrics.http_req_connecting.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ http_req_duration.................: avg=${data.metrics.http_req_duration.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ http_req_failed...................: ${(data.metrics.http_req_failed.values.rate * 100).toFixed(2)}%\n`;
    summary += `${indent}✓ http_req_receiving................: avg=${data.metrics.http_req_receiving.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ http_req_sending..................: avg=${data.metrics.http_req_sending.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ http_req_waiting..................: avg=${data.metrics.http_req_waiting.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ iteration_duration................: avg=${data.metrics.iteration_duration.values.avg.toFixed(2)}ms\n`;
    summary += `${indent}✓ iterations........................: ${data.metrics.iterations.values.count}\n`;
    summary += `${indent}✓ vus...............................: min=${data.metrics.vus.values.min} max=${data.metrics.vus.values.max}\n`;

    // Add rate limiting specific metrics
    if (data.metrics['checks{check:status is 200 (success)}']) {
        const successRate = data.metrics['checks{check:status is 200 (success)}'].values.rate * 100;
        summary += `${indent}✓ Success Rate (200)................: ${successRate.toFixed(2)}%\n`;
    }

    if (data.metrics['checks{check:status is 429 (rate limited)}']) {
        const rateLimitedRate = data.metrics['checks{check:status is 429 (rate limited)}'].values.rate * 100;
        summary += `${indent}✓ Rate Limited (429)................: ${rateLimitedRate.toFixed(2)}%\n`;
    }

    return summary;
}